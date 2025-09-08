import css from "./FilterLocation.module.css";
import Sprite from "../../assets/img/sprite.svg";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/filtersSlice";
const FilterLocation = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.location}>
      <svg width="20" height="20">
        <use xlinkHref={`${Sprite}#map`} />
      </svg>
      <input
        type="text"
        placeholder="Kyiv, Ukraine"
        onChange={(event) => dispatch(setLocation(event.target.value))}
      />
    </div>
  );
};

export default FilterLocation;
