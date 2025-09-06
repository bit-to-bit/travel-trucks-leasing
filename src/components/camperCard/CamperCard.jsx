import Sprite from '../../assets/img/sprite.svg';
import { getCamperProperties, cropText } from '../../utils';
import css from './CamperCard.module.css';
import CamperLink from '../camperLink/CamperLink';
const CamperCard = ({ camper }) => {
  const propertis = getCamperProperties(camper);

  return (
    <div className={css.card}>
      <div className={css.photo}>
        <img src={camper.gallery[0].original} alt='hi' />
      </div>
      <div className={css.info}>
        <div className={css.caption}>
          <h3>{camper.name}</h3>
          <p>{`€${camper.price.toFixed(2)}`}</p>
        </div>

        <p className={css.description}>{cropText(camper.description)}</p>

        <ul className={css.properties}>
          {propertis &&
            propertis.map((el, idx) => (
              <li key={`${camper.id}@${idx}`}>
                <span className={css.tag}>
                  <svg width='20' height='20'>
                    <use xlinkHref={`${Sprite}#icon-fuel-pump`} />
                  </svg>
                  {el}
                </span>
              </li>
            ))}
        </ul>
        <CamperLink camper={camper}/>
      </div>
    </div>
  );
};

export default CamperCard;