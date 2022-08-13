import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TextTransition, { presets } from 'react-text-transition';
import CTAButton from '../../components/cta/cta.component';

const HeroSection = ({ handleClick, handleSubmit, handleChange, email }) => {
  const TEXTS = [
    'normal skin',
    'sensitive skin',
    'oily skin',
    'dry skin',
    'aging skin',
    'acne-prone skin',
    'breakouts',
    'wrinkles',
    'dark spots',
  ];

  const { ref, entry } = useInView({
    root: null, //browser viewport
    threshold: 0,
    rootMargin: '16px',
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
          <div className='hero-text-box__heading-container'>
            <h1 className='heading-primary hero-text-box__heading-container--text'>
              Personalized cream for
            </h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
              className='heading-primary text-primary-color-dark hero-text-box__heading-container--transition'
              inline
            />
          </div>

          <h3 className='heading-tertiary'>
            The only skincare product designed specifically for every customer by a dermatologist
          </h3>

          <CTAButton buttonText='Unlock your free offer' handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
