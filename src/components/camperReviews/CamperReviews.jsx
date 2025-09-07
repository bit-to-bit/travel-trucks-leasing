import { useSelector } from "react-redux";
import { selectCamperReviews } from "../../redux/campersSlice";
import Stars from "../stars/Stars";
import css from "./CamperReviews.module.css";
const CamperReviews = () => {
  const camperReviews = useSelector(selectCamperReviews);
  return (
    <ul className={css.reviews}>
      {camperReviews &&
        camperReviews.map((el, idx) => (
          <li key={idx}>
            <div>
              <span className={css.label}>{el.reviewer_name[0]}</span>
              <div>
                <span>{el.reviewer_name}</span>
                <Stars rating={el.reviewer_rating} />
              </div>
            </div>
            <p>{el.comment}</p>
          </li>
        ))}
    </ul>
  );
};

export default CamperReviews;
