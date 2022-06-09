import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TextTransition, { presets } from 'react-text-transition';
import CustomButton from '../../components/custom-button/custom-button.component';

const HeroSection = ({ homepage = true, handleClick, handleSubmit, handleChange, email }) => {
  const TEXTS = [
    'acne',
    'breakouts',
    'wrinkles',
    'pimples',
    'dark spots',
    'blackheads',
    'whiteheads',
  ];

  const { ref, entry } = useInView({
    root: null, //browser viewport
    threshold: 0,
    rootMargin: '0px',
  });

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500 // every 1 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

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
            Personalized cream to treat
            <br />
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
              className='text-primary-color'
              inline
            />
          </h1>

          <p className='hero-description'>
            The most effective skincare products personalized and delivered to you by
            dermatologists.
          </p>

          <CustomButton className='btn btn--full' onClick={handleClick}>
            Learn More
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
