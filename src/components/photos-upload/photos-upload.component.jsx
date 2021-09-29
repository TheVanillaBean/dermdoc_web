import imageCompression from 'browser-image-compression';
import React from 'react';
import Files from 'react-butterfiles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import { uploadToFirebaseStorage } from '../../firebase/firebase.utils';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import CustomButton from '../custom-button/custom-button.component';

class PhotosUpload extends React.Component {
  state = {
    files: [],
    errors: [],
    dragging: false,
    submitted: false,
  };

  handleErrors = (errors) => {
    this.setState({ errors });
  };

  handleFiles = async (files, selectedIndex) => {
    this.setState({ errors: [] }, async () => {
      const newValue = [...this.state.files];

      const convertedImages = [];
      for (let i = 0; i < files.length; i++) {
        const image = files[i];
        convertedImages.push({
          file: image.src.file,
          src: image.src.base64,
          name: image.name,
          size: image.size,
          type: image.type,
        });
      }

      newValue.splice(selectedIndex, 0, ...convertedImages);
      this.setState({ files: newValue });
    });
  };

  handleSubmit = async () => {
    const { visit, updateVisitAsync } = this.props;

    toast.info('Securely uploading photos...please wait');
    this.setState({ submitted: true });

    if (!this.state.submitted) {
      for (const photo of this.state.files) {
        const options = {
          maxSizeMB: 0.3,
          maxWidthOrHeight: 1080,
          useWebWorker: true,
        };
        try {
          const compressedFile = await imageCompression(photo.file, options);
          await uploadToFirebaseStorage(compressedFile, visit.visit_id);
        } catch (error) {
          toast.error(error);
          this.setState({ submitted: false });
          return;
        }
      }

      try {
        await updateVisitAsync(visit.visit_id, {
          photos_added: true,
        });
      } catch (error) {
        toast.error(error);
        return;
      }

      this.setState({ submitted: false });
    }
  };

  render() {
    return (
      <div className='container'>
        <Files
          id={'image-gallery'}
          multiple
          convertToBase64
          maxSize='50mb'
          accept={['image/jpg', 'image/jpeg', 'image/png']}
          onError={this.handleErrors}
          onSuccess={(files) => {
            // Will append images at the end of the list.
            this.handleFiles(files, this.state.files.length);
          }}>
          {({ browseFiles, getDropZoneProps, getLabelProps }) => (
            <div className='photo-gallery-container'>
              <label className='photo-gallery--title' {...getLabelProps()}>
                Upload photo ID and images of your issue
              </label>
              <label className='photo-gallery--subtitle' {...getLabelProps()}>
                *For convenience, you can paste this URL into a phone browser*
              </label>
              {this.state.errors.length > 0 && (
                <div className='photo-gallery--error'>An error occurred.</div>
              )}
              <div
                {...getDropZoneProps({
                  id: 'my-image-gallery',
                  className: 'photo-gallery' + (this.state.dragging ? ' dragging' : ''),
                  onDragEnter: () => this.setState({ dragging: true }),
                  onDragLeave: () => this.setState({ dragging: false }),
                  onDrop: () => this.setState({ dragging: false }),
                })}>
                <ul>
                  {this.state.files.map((image, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        browseFiles({
                          onErrors: this.handleErrors,
                          onSuccess: (files) => {
                            // Will insert images after the clicked image.
                            this.handleFiles(files, index + 1);
                          },
                        });
                      }}>
                      <img src={image.src} alt='User selected' />
                    </li>
                  ))}
                  <li
                    className='new-image'
                    onClick={() => {
                      browseFiles({
                        onErrors: this.handleErrors,
                        onSuccess: (files) => {
                          // Will append images at the end of the list.
                          this.handleFiles(files, this.state.files.length);
                        },
                      });
                    }}>
                    <div>+</div>
                  </li>
                </ul>
              </div>
              <CustomButton className='btn btn--full' onClick={this.handleSubmit}>
                Submit and Continue
              </CustomButton>
            </div>
          )}
        </Files>
        {this.state.submitted && (
          <div className='spinner-overlay'>
            <div className='spinner-container' />
          </div>
        )}
        <ToastContainer
          position='top-right'
          bodyClassName='toastBody'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotosUpload));
