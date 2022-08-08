import React from 'react';
import { IoCheckmarkCircleOutline, IoHappyOutline, IoHeartOutline } from 'react-icons/io5';
import 'swiper/modules/mousewheel/mousewheel.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import Cream from '../../assets/img/cream-swipe.png';
import { ReactComponent as AbsorbicAcid } from '../../assets/img/ingredients/absorbic-acid.svg';
import { ReactComponent as AzelaicAcid } from '../../assets/img/ingredients/azelaic-acid.svg';
import { ReactComponent as Clindamycin } from '../../assets/img/ingredients/clindamycin.svg';
import { ReactComponent as Hydrocortisone } from '../../assets/img/ingredients/hydrocortisone.svg';
import { ReactComponent as Hydroquinone } from '../../assets/img/ingredients/hydroquinone.svg';
import { ReactComponent as Ketoconazole } from '../../assets/img/ingredients/ketoconazole.svg';
import { ReactComponent as KojicAcid } from '../../assets/img/ingredients/kojic-acid.svg';
import { ReactComponent as Metronidazole } from '../../assets/img/ingredients/metronidazole.svg';
import { ReactComponent as Niacinamide } from '../../assets/img/ingredients/niacinamide.svg';
import { ReactComponent as Tretinoin } from '../../assets/img/ingredients/tretinoin.svg';
import { ReactComponent as ZincPyrithione } from '../../assets/img/ingredients/zinc-pyrithione.svg';
import Leaf from '../../assets/img/leaf-img.png';
import CreamPricing from '../../assets/img/pricing-cream.jpg';
import PillsPricing from '../../assets/img/pricing-oral.jpg';
import StepsOne from '../../assets/img/step-1-v2.jpg';
import StepsTwo from '../../assets/img/step-2-v2.jpg';
import StepsThree from '../../assets/img/step-3-v2.jpg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
class Ingredients extends React.Component {
  handleClick = () => {
    const { history } = this.props;

    document.body.classList.remove('sticky');

    history.push(`get_started`);
  };
  render() {
    return (
      <div>
        <Header />
        <section className='section-ingredients margin-bottom-md' id='ingredients'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>All Our Prescription Ingredients</h1>
            <p className='heading-tertiary'>
              Your dermatologist will select a few to be blended into your custom cream
            </p>
          </div>

          <div className='container featured-ingredients grid grid--4-cols margin-bottom-md'>
            <div className='featured-ingredients__box'>
              <Tretinoin alt='tretinoin icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Tretinoin</p>
              <p className='featured-ingredients__box--description paragraph'>
                Reduces inflammation associated with acne and improves skin texture and tone. It is
                only available with a prescription.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <AbsorbicAcid alt='absorbic acid icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Absorbic Acid</p>
              <p className='featured-ingredients__box--description paragraph'>
                An antioxidant that fights harmful free radicals (toxins) that come in contact with
                your skin from external sources like air pollution.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <Clindamycin alt='clindamycin icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Clindamycin</p>
              <p className='featured-ingredients__box--description paragraph'>
                An antibiotic that kills certain types of bacteria or stops them from growing. It is
                used to treat inflammatory acne by reducing the number of bacteria that cause acne.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <AzelaicAcid alt='azelaic acid icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Azelaic Acid</p>
              <p className='featured-ingredients__box--description paragraph'>
                Clears pores of bacteria that may be causing irritation or breakouts and gently
                encourages cell turnover so your skin heals more quickly and scarring is minimized.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <Hydrocortisone
                alt='hydrocortisone acid icon'
                className='featured-ingredients__box--img'
              />
              <p className='featured-ingredients__box--name heading-tertiary'>Hydrocortisone</p>
              <p className='featured-ingredients__box--description paragraph'>
                Works by activating natural substances in the skin to reduce swelling, redness, and
                itching.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <Hydroquinone
                alt='hydroquinone acid icon'
                className='featured-ingredients__box--img'
              />
              <p className='featured-ingredients__box--name heading-tertiary'>Hydroquinone</p>
              <p className='featured-ingredients__box--description paragraph'>
                Bleaches your skin by decreasing the number of melanocytes present, which can be
                helpful for treating different forms of hyperpigmentation. Melanocytes make melanin,
                which is what produces your skin tone.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <Ketoconazole
                alt='ketoconazole acid icon'
                className='featured-ingredients__box--img'
              />
              <p className='featured-ingredients__box--name heading-tertiary'>Ketoconazole</p>
              <p className='featured-ingredients__box--description paragraph'>
                Used to treat skin infections such as athlete's foot, jock itch, ringworm, and
                certain kinds of dandruff.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <KojicAcid alt='kojic acid acid icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Kojic Acid</p>
              <p className='featured-ingredients__box--description paragraph'>
                Inhibits and prevents the formation of tyrosine, which is an amino acid that’s
                needed to produce melanin. This is often used to treat hyperpigmentation.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <Metronidazole
                alt='metronidazole acid icon'
                className='featured-ingredients__box--img'
              />
              <p className='featured-ingredients__box--name heading-tertiary'>Metronidazole</p>
              <p className='featured-ingredients__box--description paragraph'>
                Treats inflammation caused by rosacea. This condition causes the skin of your face
                to redden and form small bumps.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <Niacinamide alt='niacinamide acid icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Niacinamide</p>
              <p className='featured-ingredients__box--description paragraph'>
                Helps prevent the transfer of pigment within the skin, meaning that you'll have
                fewer brown spots. The anti-inflammatory properties also reduce redness and red
                patches.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <ZincPyrithione
                alt='zinc pyrithione acid icon'
                className='featured-ingredients__box--img'
              />
              <p className='featured-ingredients__box--name heading-tertiary'>Zinc Pyrithione</p>
              <p className='featured-ingredients__box--description paragraph'>
                Alleviates redness and itching associated with seborrheic dermatitis on the face. It
                can also help alleviate some of the greasiness associated with eczema and seborrheic
                dermatitis.
              </p>
            </div>
          </div>

          <img src={Cream} className='section-ingredients--cream' alt='skin cream smear' />

          <img src={Leaf} className='section-ingredients--leaf' alt='green leaf' />
        </section>
        <section className='section-how' id='how'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>How it works</h1>
            <p className='heading-tertiary'>You're only 3 steps away from clearer skin</p>
          </div>

          <div className='container steps-container'>
            <div className='steps-container__step'>
              <div className='steps-container__step__number'>
                <h2 className='heading-primary steps-container__step__number--text'>1</h2>
              </div>
              <div className='steps-container__step__text'>
                <h1 className='steps-container__step__text--title heading-tertiary'>
                  Upload selfies
                </h1>
                <p className='steps-container__step__text--description paragraph'>
                  Answer some questions and share photos of your skin.
                </p>
              </div>

              <img src={StepsOne} alt='Step One' className='steps-container__step--img' />
            </div>
            <div className='steps-container__step'>
              <div className='steps-container__step__number'>
                <h2 className='heading-primary steps-container__step__number--text'>2</h2>
              </div>
              <div className='steps-container__step__text'>
                <h1 className='steps-container__step__text--title heading-tertiary'>
                  Receive custom formula
                </h1>
                <p className='steps-container__step__text--description paragraph'>
                  Your dermatologist will design a personalized cream for you within 24 hours.
                </p>
              </div>

              <img src={StepsTwo} alt='Step Two' className='steps-container__step--img' />
            </div>
            <div className='steps-container__step'>
              <div className='steps-container__step__number'>
                <h2 className='heading-primary steps-container__step__number--text steps-container__step__number--text--3'>
                  3
                </h2>
              </div>
              <div className='steps-container__step__text'>
                <h1 className='steps-container__step__text--title heading-tertiary'>
                  Check-in as needed
                </h1>
                <p className='steps-container__step__text--description paragraph'>
                  You'll check-in with your dermatologist throughout your journey.
                </p>
              </div>
              <img src={StepsThree} alt='Step Three' className='steps-container__step--img' />
            </div>
          </div>

          <div className='container center-text'>
            <CustomButton className='btn btn--full' onClick={this.handleClick}>
              Begin Step 1 for free
            </CustomButton>
          </div>
        </section>
        <section className='section-pricing' id='pricing'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Pricing</h1>
            <p className='heading-tertiary'>Get started with our risk-free 3-month trial</p>
          </div>

          <div className='container grid grid--2-cols margin-bottom-md '>
            <div className='pricing-plan pricing-plan--cream'>
              <img className='pricing-plan--img' src={CreamPricing} alt='Headshot' />

              <div className='pricing-plan__content'>
                <header className='pricing-plan__content--header'>
                  <p className='pricing-plan__content--name heading-tertiary'>
                    <span>Personalized Cream</span>
                  </p>
                  <p className='pricing-plan__content--price'>
                    <span>$</span>9.99
                  </p>
                  <p className='pricing-plan__content--text paragraph'>
                    per month. Includes topical cream and <strong>check-ins</strong> with a
                    dermatologist.
                  </p>
                </header>
                <ul className='list'>
                  <li className='list__item'>
                    <IoHeartOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      <strong>Custom</strong> topical cream designed just for you
                    </span>
                  </li>
                  <li className='list__item'>
                    <IoHappyOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      <strong>Delivered</strong> to your door (free shipping)
                    </span>
                  </li>
                  <li className='list__item'>
                    <IoCheckmarkCircleOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      <strong>Check-ins</strong> to monitor your skin
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='pricing-plan pricing-plan--pills'>
              <img className='pricing-plan--img' src={PillsPricing} alt='Headshot' />

              <div className='pricing-plan__content'>
                <header className='pricing-plan__content--header'>
                  <p className='pricing-plan__content--name heading-tertiary'>
                    <span>Oral Medications</span>
                  </p>

                  <p className='pricing-plan__content--price'>
                    <span>$</span>9.99
                  </p>

                  <p className='pricing-plan__content--text paragraph'>
                    extra per month. In-case you need it &#128522; Check-ins still included. <br />
                  </p>
                </header>
                <ul className='list'>
                  <li className='list__item'>
                    <IoHeartOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      Oral medications include
                      <strong> spironolactone and various antibiotics</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='container center-text margin-bottom-md'>
            <p className='heading-primary'>3-month risk-free trial</p>
            <p className='heading-tertiary'>
              If you don't like your cream after your 3-month trial, you will get a{' '}
              <span className='text-primary-color'>100%</span> refund. After your trial, plans renew
              at <span className='text-primary-color'>$19.99/month</span>.
            </p>
          </div>

          <div className='container center-text'>
            <CustomButton className='btn btn--full' onClick={this.handleClick}>
              Try 3-month risk-free trial - $9.99
            </CustomButton>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Ingredients;
