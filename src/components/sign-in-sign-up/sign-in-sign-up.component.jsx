import React from 'react';
import Faq from 'react-faq-component';
import { IoInformationCircle, IoSchoolOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import 'swiper/modules/mousewheel/mousewheel.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import OmarHeadshot from '../../assets/img/omar-cutout.png';
import ProductWithBubbles from '../../assets/img/product-with-bubbles-desktop.png';
import SaamiHeadshot from '../../assets/img/saami_headshot.jpg';
import SignUp from '../../components/sign-up/sign-up.component';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import { homepageFAQ } from '../../utils/faq.utils';

class SignInSignUp extends React.Component {
  render() {
    const { visit, notAuthorized = false } = this.props;

    if (visit && visit.patient_id) {
      return this.existingVisitUI(notAuthorized);
    }
    return this.newVisitUI(visit.mailing_state);
  }

  credentialsDoNotMatchHeader() {
    return (
      <div className='container auth-container__header'>
        <h1 className='heading-secondary margin-bottom-ex-sm'>&#128556; Oh no!</h1>
        <p className='heading-tertiary'>
          It looks like this visit was created under a different account than the one you are
          currently logged in as. Please login to the same account you used to create this visit.
        </p>

        <SignUp existingVisit={true} />
      </div>
    );
  }

  credentialsNotEnteredHeader() {
    return (
      <div className='container auth-container__header'>
        <h1 className='heading-secondary margin-bottom-ex-sm'>&#127881; Welcome back!</h1>
        <p className='heading-tertiary'>Please login to access this visit.</p>

        <SignUp existingVisit={true} />
      </div>
    );
  }

  existingVisitUI(notAuthorized) {
    return (
      <div className='auth-container'>
        {notAuthorized ? this.credentialsDoNotMatchHeader() : this.credentialsNotEnteredHeader()}
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
      </div>
    );
  }

  newVisitUI(mailing_state) {
    return (
      <>
        <div className='auth-container margin-bottom-md'>
          <div className='container auth-container__header'>
            <h1 className='heading-secondary margin-bottom-ex-sm'>
              &#127881; Hooray! Your free trial is waiting!
            </h1>
            <p className='heading-tertiary'>
              Our dermatologists need to know a few things about you first before they can mix a
              personalized formula.
            </p>

            <div className='pricing-box'>
              <img
                className='pricing-box__img'
                src={ProductWithBubbles}
                alt='Product with Bubbles'
              />
              <div className='pricing-box__text'>
                <h1 className='heading-secondary text-primary-color'>FREE</h1>
                <p className='paragraph'>just pay $9.99 for shipping</p>
              </div>
            </div>

            <div className='checkout-container__info-box'>
              <IoInformationCircle className='checkout-container__info-box--img' />
              <p className='checkout-container__info-box--text '>
                The reason you need to create an account is to answer a few questions about your
                skin. That's it.
              </p>
            </div>

            <SignUp existingVisit={false} />
          </div>
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
        </div>
        <section className='section-doctors'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Meet your selected dermatologist</h1>
            <p className='heading-tertiary'>
              {mailing_state === 'MA' ? 'Dr. Badri ' : 'Dr. Khalifian '}
              will design your specific cream based on your answers to a few questions.
            </p>
          </div>
          <div className='container main-doctors-container margin-bottom-md'>
            {mailing_state === 'MA' ? this.omarCard() : this.saamiCard()}
          </div>
        </section>
        <section className='section-faq' id='faq'>
          <div className='container center-text margin-bottom-md'>
            <h2 className='heading-primary'>Have Questions?</h2>
            <h2 className='heading-tertiary'>Learn why DermDoc is unique</h2>
          </div>

          <div className='container faq-style-wrapper'>
            <Faq
              data={homepageFAQ}
              styles={{
                titleTextColor: 'var(--color-primary)',
                rowTitleColor: 'var(--color-grey-dark-1)',
                transitionDuration: '.2s',
                timingFunc: 'linear',
                titleTextSize: '2.8rem',
                rowTitleTextSize: '2.1rem',
                rowContentTextSize: '2.1rem',
                rowContentPaddingTop: '1.2rem',
                rowContentPaddingBottom: '1.2rem',
              }}
            />
          </div>
        </section>
      </>
    );
  }

  omarCard() {
    return (
      <div className='featured-doctor featured-doctor--main'>
        <img src={OmarHeadshot} alt='' className='featured-doctor--img-main' />

        <div className='featured-doctor__details featured-doctor__details--main'>
          <h2 className='heading-secondary featured-doctor__details--name'>Dr. Omar Badri M.D.</h2>
          <h2 className='featured-doctor__details__tag featured-doctor__details__tag--main'>
            <IoSchoolOutline className='featured-doctor__details__tag--icon' />
            <p className='heading-tertiary featured-doctor__details__tag--text'>
              Harvard University
            </p>
          </h2>
          <h2 className='paragraph featured-doctor__details--bio featured-doctor__details--bio--main'>
            Dr. Badri completed his intern year at Brigham & Women’s Hospital (Harvard). He
            completed residency training in Dermatology (Brigham & Women’s Hospital, Massachusetts
            General Hospital, and Boston Children’s Hospital) and Internal Medicine (Brigham &
            Women’s Hospital) at Harvard. Dr. Badri has also published multiple peer-reviewed
            journal articles and has presented at national meetings. <br />
            <br />
            Read more about Omar here:{' '}
            <a href='https://www.nedermatology.com/team/omar-badri'>
              https://www.nedermatology.com/team/omar-badri
            </a>
          </h2>
        </div>
      </div>
    );
  }

  saamiCard() {
    return (
      <div className='featured-doctor featured-doctor--main'>
        <img src={SaamiHeadshot} alt='' className='featured-doctor--img-main' />

        <div className='featured-doctor__details featured-doctor__details--main'>
          <h2 className='heading-secondary featured-doctor__details--name'>
            Dr. Saami Khalifian M.D.
          </h2>
          <h2 className='featured-doctor__details__tag featured-doctor__details__tag--main'>
            <IoSchoolOutline className='featured-doctor__details__tag--icon' />
            <p className='heading-tertiary featured-doctor__details__tag--text'>Johns Hopkins</p>
          </h2>
          <h2 className='paragraph featured-doctor__details--bio featured-doctor__details--bio--main'>
            Dr. Khalifian completed his undergraduate studies at University of California, Berkeley.
            He received his medical degree from The Johns Hopkins School of Medicine.
            <br />
            <br />
            Read more about Saami here:{' '}
            <a href='https://www.grossmontdermatology.com/dr-sam-khalifian.html'>
              https://www.grossmontdermatology.com/dr-sam-khalifian.html
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

export default withRouter(connect(mapStateToProps)(SignInSignUp));
