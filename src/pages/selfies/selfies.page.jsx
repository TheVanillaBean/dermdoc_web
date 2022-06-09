import React from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import SelfiesUploadContainer from '../../components/selfies-upload/selfies-upload.container';

class PhotosPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <SelfiesUploadContainer />

        <Footer />
      </div>
    );
  }
}

export default PhotosPage;
