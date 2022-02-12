import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CustomButton from '../../components/custom-button/custom-button.component';

const HeroSection = ({ homepage = true, handleClick, handleSubmit, handleChange, email }) => {
  const { ref, entry } = useInView({
    root: null, //browser viewport
    threshold: 0,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (entry?.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (entry?.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  }, [entry]);
  return homepage ? (
    <section ref={ref} className='section-hero'>
      <div className='hero'>
        <div className='hero-text-box'>
          <h1 className='heading-primary'>
            Your skincare routine just got <br />
            <span class='frame frame-cheaper'>40% cheaper</span>
          </h1>

          <p className='hero-description'>
            You'll get a custom cream that combines powerful prescription ingredients, tailored just
            for you by a board-certified dermatologist.
          </p>

          <CustomButton className='btn btn--full' onClick={handleClick}>
            Try for three months - $20
          </CustomButton>
        </div>
      </div>
    </section>
  ) : (
    <section ref={ref} className='section-hero'>
      <div className='hero'>
        <div className='hero-text-box'>
          <h1 className='heading-primary'>
            Get clear skin with your own custom prescription formula
          </h1>
          <h1 className='heading-tertiary'>Launching in AZ February 2022</h1>
          <h1 className='heading-tertiary'>Join the waitlist for a limited-time 50% discount</h1>

          <form className='waitlist-form' onSubmit={handleSubmit}>
            <div className='waitlist-form__input-container'>
              <input
                className={`waitlist-form__input-container__input`}
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                placeholder='Enter email...'
                required
              />
              <label className={`waitlist-form__input-container__label`} htmlFor='email'>
                Enter email...
              </label>
            </div>

            <CustomButton className='custom-button waitlist-form__button' type='submit'>
              Join Waitlist
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
