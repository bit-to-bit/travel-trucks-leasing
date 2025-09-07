import { useSelector } from "react-redux";
import { selectCamperProperties } from "../../redux/campersSlice";
import Sprite from "../../assets/img/sprite.svg";
import css from "./CamperProperties.module.css";
const CamperProperties = () => {
  const camperProperties = useSelector(selectCamperProperties);
  return (
    <ul className={css.properties}>
      {camperProperties &&
        camperProperties.map((el, idx) => (
          <li key={idx}>
            <span className={css.tag}>
              <svg width="20" height="20">
                <use xlinkHref={`${Sprite}#${el.ico}`} />
              </svg>
              {el.name}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default CamperProperties;
