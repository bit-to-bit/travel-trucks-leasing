import Sprite from "../../assets/img/sprite.svg";
import { getCamperProperties, getReviewsSummary, cropText } from "../../utils";
import css from "./CamperCard.module.css";
import CamperLink from "../camperLink/CamperLink";
const CamperCard = ({ camper }) => {
  const propertis = getCamperProperties(camper);
  const reviewSummary = getReviewsSummary(camper);

  return (
    <div className={css.card}>
      <div className={css.photo}>
        <img src={camper.gallery[0].original} alt="hi" />
      </div>
      <div className={css.info}>
        <div className={css.caption}>
          <h3>{camper.name}</h3>
          <div>
            <p>{`€${camper.price.toFixed(2)}`}</p>
            <button className={css.favorite}>
              <svg width="26" height="24">
                <use xlinkHref={`${Sprite}#heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.reviews}>
          <div>
            <svg className={css.star} width="16" height="16">
              <use xlinkHref={`${Sprite}#star`} />
            </svg>
            <span>{reviewSummary}</span>
          </div>
          <div>
            <svg className={css.map} width="16" height="16">
              <use xlinkHref={`${Sprite}#map`} />
            </svg>
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={css.description}>{cropText(camper.description)}</p>

        <ul className={css.properties}>
          {propertis &&
            propertis.map((el, idx) => (
              <li key={`${camper.id}@${idx}`}>
                <span className={css.tag}>
                  <svg width="20" height="20">
                    <use xlinkHref={`${Sprite}#icon-fuel-pump`} />
                  </svg>
                  {el}
                </span>
              </li>
            ))}
        </ul>
        <CamperLink camper={camper} />
      </div>
    </div>
  );
};

export default CamperCard;
