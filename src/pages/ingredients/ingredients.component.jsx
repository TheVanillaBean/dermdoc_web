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
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';

const Ingredients = () => {
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
            <Hydroquinone alt='hydroquinone acid icon' className='featured-ingredients__box--img' />
            <p className='featured-ingredients__box--name heading-tertiary'>Hydroquinone</p>
            <p className='featured-ingredients__box--description paragraph'>
              Bleaches your skin by decreasing the number of melanocytes present, which can be
              helpful for treating different forms of hyperpigmentation. Melanocytes make melanin,
              which is what produces your skin tone.
            </p>
          </div>
          <div className='featured-ingredients__box'>
            <Ketoconazole alt='ketoconazole acid icon' className='featured-ingredients__box--img' />
            <p className='featured-ingredients__box--name heading-tertiary'>Ketoconazole</p>
            <p className='featured-ingredients__box--description paragraph'>
              Used to treat skin infections such as athlete's foot, jock itch, ringworm, and certain
              kinds of dandruff.
            </p>
          </div>
          <div className='featured-ingredients__box'>
            <KojicAcid alt='kojic acid acid icon' className='featured-ingredients__box--img' />
            <p className='featured-ingredients__box--name heading-tertiary'>Kojic Acid</p>
            <p className='featured-ingredients__box--description paragraph'>
              Inhibits and prevents the formation of tyrosine, which is an amino acid that’s needed
              to produce melanin. This is often used to treat hyperpigmentation.
            </p>
          </div>
          <div className='featured-ingredients__box'>
            <Metronidazole
              alt='metronidazole acid icon'
              className='featured-ingredients__box--img'
            />
            <p className='featured-ingredients__box--name heading-tertiary'>Metronidazole</p>
            <p className='featured-ingredients__box--description paragraph'>
              Treats inflammation caused by rosacea. This condition causes the skin of your face to
              redden and form small bumps.
            </p>
          </div>
          <div className='featured-ingredients__box'>
            <Niacinamide alt='niacinamide acid icon' className='featured-ingredients__box--img' />
            <p className='featured-ingredients__box--name heading-tertiary'>Niacinamide</p>
            <p className='featured-ingredients__box--description paragraph'>
              Helps prevent the transfer of pigment within the skin, meaning that you'll have fewer
              brown spots. The anti-inflammatory properties also reduce redness and red patches.
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

      <Footer />
    </div>
  );
};

export default Ingredients;
