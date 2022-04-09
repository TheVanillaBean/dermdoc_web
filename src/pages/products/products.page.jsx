import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'swiper/modules/mousewheel/mousewheel.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import AcnePhoto from '../../assets/img/specialty-photos/Acne.jpeg';
import MelasmaPhoto from '../../assets/img/specialty-photos/Melasma.jpeg';
import RosaceaPhoto from '../../assets/img/specialty-photos/Rosacea.jpeg';
import SkinTexturePhoto from '../../assets/img/specialty-photos/SkinTexture.jpeg';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import ServiceCard from '../../components/service-card/service-card.component';
import { analytics } from '../../firebase/firebase.utils';
import { updateVisitReason } from '../../redux/search/search.actions';

class ProductsPage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleClick = (service) => {
    const { history, updateVisitReason } = this.props;

    document.body.classList.remove('sticky');

    history.push(`products/${service.toLowerCase()}`);
  };

  render() {
    return (
      <main>
        <Header />

        <section className='section-services' id='services'>
          <div className='container center-text'>
            <span className='subheading'>What seems to be your issue?</span>
            <h2 className='heading-secondary'>Personalized care to solve your problem</h2>
          </div>
          <div className='container grid grid--3-cols margin-bottom-md'>
            <ServiceCard
              service='Acne'
              image={AcnePhoto}
              ingredients={
                'Tretinoin 0.015-0.057%, Clindamycin 1.7%, Azelaic Acid 13%, Niacinamide 4%'
              }
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Rosacea'
              image={RosaceaPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Melasma'
              image={MelasmaPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Anti-aging'
              image={SkinTexturePhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
          </div>
        </section>

        <Footer />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(connect(null, mapDispatchToProps)(ProductsPage));
