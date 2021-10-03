import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AcnePhoto from '../../assets/img/specialty-photos/Acne.jpeg';
import HairlossPhoto from '../../assets/img/specialty-photos/Hairloss.jpeg';
import SkinSpotsPhoto from '../../assets/img/specialty-photos/SkinSpots.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import ServiceCard from '../../components/service-card/service-card.component';
import { updateZipCode } from '../../redux/search/search.actions';
class GymPromotionPage extends React.Component {
  render() {
    const { gym, coupon_code, zipcode } = this.props;

    return (
      <div>
        <Header />

        <section className='gym-promotion'>
          <div className='container center-text'>
            <h2 className='heading-secondary'>Welcome {gym} Crossfitters!</h2>
          </div>

          <div className='container center-text'>
            <p className='heading-tertiary'>
              Here's a 15% discount on your next dermatology visit. Coupon code:{' '}
              <strong>{coupon_code}</strong>
            </p>
          </div>

          <div className='container center-text margin-bottom-md'>
            <p className='heading-description'>
              We are a new service founded by Crossfitters that wanted a better way to get quality
              skin/haircare from actual dermatologists.
            </p>
          </div>

          <div className='container center-text margin-bottom-md'>
            <p className='heading-description'>
              <strong>Our main difference?</strong> We don't make money from prescriptions. We make
              money for offering care. Don't let ringworm, cold sores, eczema, or any other skin
              issue slow down your PR's! &#127947;
            </p>
          </div>
          <div className='container grid grid--3-cols margin-bottom-md'>
            <ServiceCard service='Acne' image={AcnePhoto} promo />
            <ServiceCard service='Hairloss' image={HairlossPhoto} promo />
            <ServiceCard service='Skin Spots' image={SkinSpotsPhoto} promo />
          </div>
          <div className='container center-text margin-bottom-md'>
            <CustomButton
              className='btn btn--full'
              onClick={() => {
                console.log(zipcode);
                this.props.updateZipCode(zipcode);
                const { history } = this.props;
                history.push('/services');
              }}>
              See all Services
            </CustomButton>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
});

export default withRouter(connect(null, mapDispatchToProps)(GymPromotionPage));
