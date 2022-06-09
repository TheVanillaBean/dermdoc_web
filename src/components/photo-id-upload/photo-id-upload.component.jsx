import imageCompression from 'browser-image-compression';
import React from 'react';
import Files from 'react-butterfiles';
import ReactPixel from 'react-facebook-pixel';
import { IoCard } from 'react-icons/io5';
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

class PhotoIDUpload extends React.Component {
  state = {
    photoId: [],
    errors: [],
    dragging: false,
    submitted: false,
  };

  handleErrors = (errors) => {
    this.setState({ errors });
  };

  handlePhotoId = async (files, selectedIndex) => {
    this.setState({ errors: [] }, async () => {
      const newValue = [...this.state.photoId];

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
      this.setState({ photoId: newValue });
    });
  };

  handleSubmit = async () => {
    const { visit, updateVisitAsync } = this.props;

    toast.info('Securely uploading photo ID...please wait');
    this.setState({ submitted: true });

    if (!this.state.submitted) {
      for (const photo of this.state.photoId) {
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
        ReactPixel.track('InitiateCheckout', {
          content_name: 'Photos Submitted',
          content_ids: [visit.visit_id],
          value: 10,
          currency: 'USD',
        });
        await updateVisitAsync(visit.visit_id, {
          photo_id_added: true,
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
          <label className='photo-gallery--title'>Upload photo ID</label>
          <label className='photo-gallery--subtitle'>
            We need your photo ID for legal reasons because your board-certified dermatologist will
            be giving a medical evaluation. All images will be saved to our secure{' '}
            <span className='text-primary-color'>HIPAA</span> compliant backend and will never be
            shared.
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
              this.handlePhotoId(files, this.state.photoId.length);
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
                    {this.state.photoId.map((image, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          browseFiles({
                            onErrors: this.handleErrors,
                            onSuccess: (files) => {
                              // Will insert images after the clicked image.
                              this.handlePhotoId(files, index + 1);
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
                            this.handlePhotoId(files, this.state.photoId.length);
                          },
                        });
                      }}>
                      <div>
                        <IoCard className='list-icon margin-bottom-sm' />
                        <p>+ Tap to upload photo ID</p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoIDUpload));
