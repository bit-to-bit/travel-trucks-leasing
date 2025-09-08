import CamperGallery from "../camperGallery/CamperGallery";
import { getReviewsSummary } from "../../utils";
import Sprite from "../../assets/img/sprite.svg";
import css from "./CamperInfo.module.css";
const CamperInfo = ({ camper }) => {
  const reviewSummary = getReviewsSummary(camper);
  return (
    <>
      {camper && (
        <div className={css.info}>
          <h3>{camper.name}</h3>
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
          <p className={css.price}>{`€${camper.price.toFixed(2)}`}</p>

          <CamperGallery gallery={camper.gallery} />
          <p>{camper.description}</p>
        </div>
      )}
    </>
  );
};

export default CamperInfo;
