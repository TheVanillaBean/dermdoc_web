import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TextTransition, { presets } from 'react-text-transition';
import CustomButton from '../../components/custom-button/custom-button.component';

const HeroSection = ({ handleClick, handleSubmit, handleChange, email }) => {
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

  return (
    <section ref={ref} className='section-hero'>
      <div className='hero'>
        <div className='hero-text-box'>
          <div className='hero-text-box--heading'>
            <h1 className='heading-primary'>Personalized cream to treat</h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
              className='heading-primary text-primary-color-dark'
              inline
            />
          </div>

          <h3 className='heading-tertiary'>
            The most effective skincare products personalized and delivered to you by
            dermatologists.
          </h3>

          <CustomButton className='btn btn--full' onClick={handleClick}>
            Learn More
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
