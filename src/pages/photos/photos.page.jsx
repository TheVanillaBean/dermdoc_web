import React from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import PhotosUploadContainer from '../../components/photos-upload/photos-upload.container';

class PhotosPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <PhotosUploadContainer />

        <Footer />
      </div>
    );
  }
}

export default PhotosPage;
