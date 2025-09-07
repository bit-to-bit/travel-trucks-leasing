import Sprite from "../../assets/img/sprite.svg";
import css from "./Stars.module.css";
import clsx from "clsx";
const Stars = ({ rating }) => {
  const total_stars = 5;
  return (
    <ul className={css.stars}>
      {[...Array(total_stars)].map((el, idx) => (
        <li key={idx}>
          <svg
            className={idx < rating && clsx(css.active)}
            width="16"
            height="16"
          >
            <use xlinkHref={`${Sprite}#star`} />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default Stars;
