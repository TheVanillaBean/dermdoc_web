import React from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import PhotoIdUploadContainer from '../../components/photo-id-upload/photo-id-upload.container';

class PhotosPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <PhotoIdUploadContainer />

        <Footer />
      </div>
    );
  }
}

export default PhotosPage;
