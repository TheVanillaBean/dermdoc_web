import React from 'react';
import Files from 'react-butterfiles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
class PhotosUpload extends React.Component {
  state = {
    files: [],
    errors: [],
    dragging: false,
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

  render() {
    return (
      <div id='wrapper'>
        <Files
          id={'image-gallery'}
          multiple
          convertToBase64
          accept={['image/jpg', 'image/jpeg', 'image/png']}
          onError={this.handleErrors}
          onSuccess={(files) => {
            // Will append images at the end of the list.
            this.handleFiles(files, this.state.files.length);
          }}>
          {({ browseFiles, getDropZoneProps, getLabelProps }) => (
            <div>
              <label {...getLabelProps()}>Upload images</label>
              <div
                {...getDropZoneProps({
                  id: 'my-image-gallery',
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
                      <img src={image.src} />
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
            </div>
          )}
        </Files>

        {this.state.errors.length > 0 && <div>An error occurred.</div>}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionsStartAsync: (symptom) => dispatch(fetchQuestionsStartAsync(symptom)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotosUpload));
