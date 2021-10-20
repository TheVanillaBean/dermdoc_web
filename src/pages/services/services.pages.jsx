import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AcnePhoto from '../../assets/img/specialty-photos/Acne.jpeg';
import BrownSpotsPhoto from '../../assets/img/specialty-photos/BrownSpots.jpeg';
import ExcessHairPhoto from '../../assets/img/specialty-photos/ExcessHair.jpeg';
import HairlossPhoto from '../../assets/img/specialty-photos/Hairloss.jpeg';
import LatissePhoto from '../../assets/img/specialty-photos/Latisse.jpeg';
import MelasmaPhoto from '../../assets/img/specialty-photos/Melasma.jpeg';
import NailPhoto from '../../assets/img/specialty-photos/Nail.jpeg';
import RednessPhoto from '../../assets/img/specialty-photos/Redness.jpeg';
import RosaceaPhoto from '../../assets/img/specialty-photos/Rosacea.jpeg';
import SkinTexturePhoto from '../../assets/img/specialty-photos/SkinTexture.jpeg';
import UnderEyeCirclesPhoto from '../../assets/img/specialty-photos/UnderEyeCircles.jpeg';
import WrinklesPhoto from '../../assets/img/specialty-photos/Wrinkles.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import FormInput from '../../components/form-input/form-input.component';
import Header from '../../components/header/header.component';
import ServiceCard from '../../components/service-card/service-card.component';
import { addCustomServiceRequest } from '../../firebase/firebase.utils';
import { updateVisitReason } from '../../redux/search/search.actions';

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      custom_service: '',
      email: '',
    };
  }

  handleClick = (service) => {
    const { history, updateVisitReason } = this.props;

    updateVisitReason(service);
    history.push(`get_started`);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { custom_service, email } = this.state;

    try {
      const addServiceRequest = await addCustomServiceRequest(email, custom_service);

      if (addServiceRequest.error) {
        toast.error(addServiceRequest.message);
      } else {
        toast.success(
          'Thank you for your request! We will email you shortly to see how we can best help solve your problem. '
        );
      }

      this.setState({
        email: '',
        custom_service: '',
      });
    } catch (e) {
      let errorText = e.message;

      toast.error(errorText);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
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
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Hairloss'
              image={HairlossPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Brown Spots'
              image={BrownSpotsPhoto}
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
              service='Hair Removal'
              image={ExcessHairPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Latisse'
              image={LatissePhoto}
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
              service='Nail'
              image={NailPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Redness'
              image={RednessPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Skin Texture'
              image={SkinTexturePhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Under Eye Circles'
              image={UnderEyeCirclesPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Wrinkles'
              image={WrinklesPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
          </div>
          <div className='container center-text margin-bottom-md'>
            <span className='subheading'>Don't see your issue?</span>
            <h2 className='heading-tertiary'>Enter your issue below</h2>
            <form className='service-request' onSubmit={this.handleSubmit}>
              <FormInput
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                label='Email'
                required
              />
              <FormInput
                type='text'
                name='custom_service'
                value={this.state.custom_service}
                onChange={this.handleChange}
                label="What's your issue?"
                required
              />
              <CustomButton className='custom-button' type='submit'>
                Submit Issue
              </CustomButton>
            </form>
          </div>
        </section>
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
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(connect(null, mapDispatchToProps)(ServicesPage));
