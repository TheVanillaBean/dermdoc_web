import React from 'react';
import { withRouter } from 'react-router-dom';
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

class ServicesPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <section className='section-services' id='services'>
          <div className='container center-text'>
            <span className='subheading'>Select your service need</span>
            <h2 className='heading-secondary'>Our questions are tailored for each service</h2>
          </div>
          <div class='container center-text margin-bottom-md'>
            <CustomButton
              className='btn btn--full'
              onClick={() => {
                const { history } = this.props;
                history.push('/search-doctors');
              }}>
              Don't live in Massachusetts?
            </CustomButton>
          </div>

          <div className='container grid grid--3-cols margin-bottom-md'>
            <ServiceCard service='Acne' image={AcnePhoto} showButton={true} />
            <ServiceCard service='Hairloss' image={HairlossPhoto} showButton={true} />
            <ServiceCard service='Skin Spots' image={SkinSpotsPhoto} showButton={true} />

            <ServiceCard service="Athlete's Foot" image={AthletesPhoto} showButton={true} />
            <ServiceCard service='Brown Spots' image={BrownSpotsPhoto} showButton={true} />
            <ServiceCard service='Cellulite' image={CellulitePhoto} showButton={true} />

            <ServiceCard service='Double Chin' image={DoubleChinPhoto} showButton={true} />
            <ServiceCard service='Droopy Eyelids' image={DroopyEyelidsPhoto} showButton={true} />
            <ServiceCard service='Excess Fat' image={ExcessFatPhoto} showButton={true} />

            <ServiceCard service='Excess Hair' image={ExcessHairPhoto} showButton={true} />
            <ServiceCard service='Filler' image={FillerPhoto} showButton={true} />
            <ServiceCard service='Latisse' image={LatissePhoto} showButton={true} />

            <ServiceCard service='Leg Veins' image={LegVeinsPhoto} showButton={true} />
            <ServiceCard
              service='Loose Sagging Skin'
              image={LooseSaggingSkinPhoto}
              showButton={true}
            />
            <ServiceCard service='Melasma' image={MelasmaPhoto} showButton={true} />

            <ServiceCard service='Nail' image={NailPhoto} showButton={true} />
            <ServiceCard service='Psoriasis' image={PsoriasisPhoto} showButton={true} />
            <ServiceCard service='Rash' image={RashPhoto} showButton={true} />

            <ServiceCard service='Redness' image={RednessPhoto} showButton={true} />
            <ServiceCard service='Rosacea' image={RosaceaPhoto} showButton={true} />
            <ServiceCard service='Scar' image={ScarPhoto} showButton={true} />

            <ServiceCard service='Skin Texture' image={SkinTexturePhoto} showButton={true} />
            <ServiceCard service='Sun Burn' image={SunBurnPhoto} showButton={true} />
            <ServiceCard service='Tattoo Removal' image={TattooRemovalPhoto} showButton={true} />

            <ServiceCard
              service='Under Eye Circles'
              image={UnderEyeCirclesPhoto}
              showButton={true}
            />
            <ServiceCard service='Wrinkles' image={WrinklesPhoto} showButton={true} />
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default withRouter(ServicesPage);
