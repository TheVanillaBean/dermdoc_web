import imageCompression from 'browser-image-compression';
import React from 'react';
import Files from 'react-butterfiles';
import { IoPerson } from 'react-icons/io5';
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

class SelfiesUpload extends React.Component {
  state = {
    selfies: [],
    errors: [],
    dragging: false,
    submitted: false,
  };

  handleErrors = (errors) => {
    this.setState({ errors });
  };

  handleSelfies = async (files, selectedIndex) => {
    this.setState({ errors: [] }, async () => {
      const newValue = [...this.state.selfies];

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
      this.setState({ selfies: newValue });
    });
  };

  handleSubmit = async () => {
    const { visit, updateVisitAsync } = this.props;

    toast.info('Securely uploading selfies...please wait');
    this.setState({ submitted: true });

    if (!this.state.submitted) {
      for (const photo of this.state.selfies) {
        const options = {
          maxSizeMB: 0.3,
          maxWidthOrHeight: 1080,
          useWebWorker: true,
        };
        try {
          console.log('Compress Start');
          const compressedFile = await imageCompression(photo.file, options);
          await uploadToFirebaseStorage(compressedFile, visit.visit_id);
          console.log('Upload');
        } catch (error) {
          toast.error(error);
          this.setState({ submitted: false });
          return;
        }
      }

      try {
        await updateVisitAsync(visit.visit_id, {
          selfies_added: true,
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
        <div className='photo-gallery-container'>
          <label className='photo-gallery--title'>Upload 1-3 selfies</label>
          <label className='photo-gallery--subtitle'>
            Please upload some selfies so your dermatologist can give you a proper{' '}
            <span className='text-primary-color'>medical evaluation</span>.
          </label>
          <Files
            id={'image-gallery'}
            multiple
            convertToBase64
            maxSize='50mb'
            accept={['image/jpg', 'image/jpeg', 'image/png']}
            onError={this.handleErrors}
            onSuccess={(files) => {
              // Will append images at the end of the list.
              this.handleSelfies(files, this.state.selfies.length);
            }}>
            {({ browseFiles, getDropZoneProps, getLabelProps }) => (
              <>
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
                    {this.state.selfies.map((image, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          browseFiles({
                            onErrors: this.handleErrors,
                            onSuccess: (files) => {
                              // Will insert images after the clicked image.
                              this.handleSelfies(files, index + 1);
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
                            this.handleSelfies(files, this.state.selfies.length);
                          },
                        });
                      }}>
                      <div>
                        <IoPerson className='list-icon margin-bottom-sm' />
                        <p>+ Tap to upload selfies</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Files>
          <CustomButton className='btn btn--full' onClick={this.handleSubmit}>
            Submit and Continue
          </CustomButton>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelfiesUpload));
