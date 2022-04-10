import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/modules/mousewheel/mousewheel.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import AbsorbicAcid from '../../assets/img/ingredients/absorbic-acid.jpg';
import AzelaicAcid from '../../assets/img/ingredients/azelaic_acid.jpg';
import Clindamycin from '../../assets/img/ingredients/clindamycin.jpeg';
import Hydrocortisone from '../../assets/img/ingredients/hydrocortisone.jpg';
import Hydroquinone from '../../assets/img/ingredients/hydroquinone.jpg';
import Ketoconazole from '../../assets/img/ingredients/ketoconazole.png';
import KojicAcid from '../../assets/img/ingredients/kojic_acid.png';
import Metronidazole from '../../assets/img/ingredients/metronidazole.jpg';
import Niacinamide from '../../assets/img/ingredients/niacinamide.jpg';
import Trentinoin from '../../assets/img/ingredients/trentinoin.jpeg';
import Zinc from '../../assets/img/ingredients/zinc.png';

const ingredientsSlides = {
  tretinoin: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Trentinoin} alt='Trentinoin' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.01 - 0.1%</span>
          </div>
          <p className='ingredient-title'>Tretinoin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces fine lines and wrinkles</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves skin tone and texture</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces hyperpigmentation</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  clindamycin: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Clindamycin} alt='Trentinoin' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>2%</span>
          </div>
          <p className='ingredient-title'>Clindamycin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces inflamed acne lesions</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves non-inflamed acne lesions</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Treats clogged pores</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  azelaic_acid: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={AzelaicAcid} alt='Azelaic acid' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>15%</span>
          </div>
          <p className='ingredient-title'>Azelaic acid</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Improves moderate-to-severe rosacea</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Lightens melasma</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces pimples and blackheads</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  niacinamide: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Niacinamide} alt='Niacinamide' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>2 - 4%</span>
          </div>
          <p className='ingredient-title'>Niacinamide</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Has powerful antioxidant actives</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves acne lesions</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Treats clogged pores</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  metronidazole: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Metronidazole} alt='Metronidazole' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.75%</span>
          </div>
          <p className='ingredient-title'>Metronidazole</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces inflamed lesions of rosacea</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Decreases facial redness</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Treats acne rosacea</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  zinc_pyrithione: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Zinc} alt='Zinc Pyrithione' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.01 - 0.1%</span>
          </div>
          <p className='ingredient-title'>Tretinoin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces fine lines and wrinkles</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves skin tone and texture</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces hyperpigmentation</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  ketoconazole: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Ketoconazole} alt='Ketoconazole' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.01 - 0.1%</span>
          </div>
          <p className='ingredient-title'>Tretinoin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces fine lines and wrinkles</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves skin tone and texture</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces hyperpigmentation</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  hydroquinone: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Hydroquinone} alt='Hydroquinone' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.01 - 0.1%</span>
          </div>
          <p className='ingredient-title'>Tretinoin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces fine lines and wrinkles</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves skin tone and texture</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces hyperpigmentation</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  kojic_acid: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={KojicAcid} alt='Kojic Acid' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.01 - 0.1%</span>
          </div>
          <p className='ingredient-title'>Tretinoin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces fine lines and wrinkles</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves skin tone and texture</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces hyperpigmentation</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  hydrocortisone: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={Hydrocortisone} alt='Hydrocortisone' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.01 - 0.1%</span>
          </div>
          <p className='ingredient-title'>Tretinoin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces fine lines and wrinkles</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves skin tone and texture</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces hyperpigmentation</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
  absorbic_acid: (
    <SwiperSlide>
      <div className='ingredient'>
        <img className='ingredient-img' src={AbsorbicAcid} alt='Absorbic Acid' />
        <div className='ingredient-content'>
          <div className='ingredient-tags'>
            <span className='tag tag--percentage'>0.01 - 0.1%</span>
          </div>
          <p className='ingredient-title'>Tretinoin</p>
          <ul className='ingredient-attributes'>
            <li className='ingredient-attribute'>
              <span>Reduces fine lines and wrinkles</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Improves skin tone and texture</span>
            </li>
            <li className='ingredient-attribute'>
              <span>Reduces hyperpigmentation</span>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  ),
};

const getIngredients = (product) => {
  if (product.toLowerCase() === 'acne') {
    return [
      ingredientsSlides.tretinoin,
      ingredientsSlides.clindamycin,
      ingredientsSlides.azelaic_acid,
      ingredientsSlides.niacinamide,
    ];
  } else if (product.toLowerCase() === 'anti-aging') {
    return ingredientsSlides.tretinoin, ingredientsSlides.absorbic_acid;
  } else if (product.toLowerCase() === 'rosacea') {
    return (
      ingredientsSlides.metronidazole,
      ingredientsSlides.zinc_pyrithione,
      ingredientsSlides.ketoconazole
    );
  } else if (product.toLowerCase() === 'melasma') {
    return (
      ingredientsSlides.tretinoin,
      ingredientsSlides.hydroquinone,
      ingredientsSlides.kojic_acid,
      ingredientsSlides.hydrocortisone
    );
  } else if (product.toLowerCase() === 'all') {
    return (
      ingredientsSlides.tretinoin,
      ingredientsSlides.clindamycin,
      ingredientsSlides.azelaic_acid,
      ingredientsSlides.niacinamide,
      ingredientsSlides.absorbic_acid,
      ingredientsSlides.metronidazole,
      ingredientsSlides.zinc_pyrithione,
      ingredientsSlides.ketoconazole,
      ingredientsSlides.hydroquinone,
      ingredientsSlides.kojic_acid,
      ingredientsSlides.hydrocortisone
    );
  } else {
    return ingredientsSlides.tretinoin;
  }
};

const IngredientsSwiper = ({ product }) => (
  <Swiper
    breakpoints={{
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    }}
    simulateTouch
    centeredSlides={true}
    loop={true}
    pagination={true}
    navigation={true}
    modules={[Pagination, Navigation]}>
    {getIngredients(product)}
  </Swiper>
);

export default IngredientsSwiper;
