import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AcnePhoto from '../../assets/img/specialty-photos/Acne.jpeg';
import AthletesPhoto from '../../assets/img/specialty-photos/AthletesFoot.jpeg';
import BrownSpotsPhoto from '../../assets/img/specialty-photos/BrownSpots.jpeg';
import CellulitePhoto from '../../assets/img/specialty-photos/Cellulite.jpeg';
import DoubleChinPhoto from '../../assets/img/specialty-photos/DoubleChin.jpeg';
import DroopyEyelidsPhoto from '../../assets/img/specialty-photos/DroopyEyelids.jpeg';
import ExcessFatPhoto from '../../assets/img/specialty-photos/ExcessFat.jpeg';
import ExcessHairPhoto from '../../assets/img/specialty-photos/ExcessHair.jpeg';
import FillerPhoto from '../../assets/img/specialty-photos/Filler.jpeg';
import HairlossPhoto from '../../assets/img/specialty-photos/Hairloss.jpeg';
import LatissePhoto from '../../assets/img/specialty-photos/Latisse.jpeg';
import LegVeinsPhoto from '../../assets/img/specialty-photos/LegVeins.jpeg';
import LooseSaggingSkinPhoto from '../../assets/img/specialty-photos/LooseSaggingSkin.jpeg';
import MelasmaPhoto from '../../assets/img/specialty-photos/Melasma.jpeg';
import NailPhoto from '../../assets/img/specialty-photos/Nail.jpeg';
import PsoriasisPhoto from '../../assets/img/specialty-photos/Psoriasis.jpeg';
import RashPhoto from '../../assets/img/specialty-photos/Rash.jpeg';
import RednessPhoto from '../../assets/img/specialty-photos/Redness.jpeg';
import RosaceaPhoto from '../../assets/img/specialty-photos/Rosacea.jpeg';
import ScarPhoto from '../../assets/img/specialty-photos/Scar.jpeg';
import SkinSpotsPhoto from '../../assets/img/specialty-photos/SkinSpots.jpeg';
import SkinTexturePhoto from '../../assets/img/specialty-photos/SkinTexture.jpeg';
import SunBurnPhoto from '../../assets/img/specialty-photos/SunBurn.jpeg';
import TattooRemovalPhoto from '../../assets/img/specialty-photos/TattooRemoval.jpeg';
import UnderEyeCirclesPhoto from '../../assets/img/specialty-photos/UnderEyeCircles.jpeg';
import WrinklesPhoto from '../../assets/img/specialty-photos/Wrinkles.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import ServiceCard from '../../components/service-card/service-card.component';
import { createVisit } from '../../firebase/firebase.utils';

class ServicesPage extends React.Component {
  handleClick = async (service) => {
    try {
      const newVisit = await createVisit(service);

      if (newVisit.error) {
        toast.error(newVisit.message);
      } else {
        const { history } = this.props;
        history.push(`/visits/${newVisit.visitId}/questions`);
      }
    } catch (e) {
      let errorText = e.message;

      toast.error(errorText);
    }
  };

  render() {
    return (
      <div>
        <Header />

        <section className='section-services' id='services'>
          <div className='container center-text'>
            <span className='subheading'>What seems to be your issue?</span>
            <h2 className='heading-secondary'>Our questions are tailored for each service</h2>
          </div>
          <div class='container center-text margin-bottom-md'>
            <CustomButton
              className='btn btn--full'
              onClick={() => {
                const { history } = this.props;
                history.push('/waitlist');
              }}>
              Don't live in Massachusetts?
            </CustomButton>
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
              service='Skin Spots'
              image={SkinSpotsPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />

            <ServiceCard
              service="Athlete's Foot"
              image={AthletesPhoto}
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
              service='Cellulite'
              image={CellulitePhoto}
              showButton={true}
              handleClick={this.handleClick}
            />

            <ServiceCard
              service='Double Chin'
              image={DoubleChinPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Droopy Eyelids'
              image={DroopyEyelidsPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Excess Fat'
              image={ExcessFatPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />

            <ServiceCard
              service='Excess Hair'
              image={ExcessHairPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Filler'
              image={FillerPhoto}
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
              service='Leg Veins'
              image={LegVeinsPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Loose Sagging Skin'
              image={LooseSaggingSkinPhoto}
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
              service='Psoriasis'
              image={PsoriasisPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Rash'
              image={RashPhoto}
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
              service='Rosacea'
              image={RosaceaPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Scar'
              image={ScarPhoto}
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
              service='Sun Burn'
              image={SunBurnPhoto}
              showButton={true}
              handleClick={this.handleClick}
            />
            <ServiceCard
              service='Tattoo Removal'
              image={TattooRemovalPhoto}
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

export default withRouter(ServicesPage);
