import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setOnFilters, selectOnFilters } from "../../redux/filtersSlice.js";
import css from "./FilterPanelSection.module.css";
import Sprite from "../../assets/img/sprite.svg";
import { filterItemIsOn } from "../../utils.js";
const FilterPanelSection = ({ caption, filterItems }) => {
  const dispatch = useDispatch();
  const onFilters = useSelector(selectOnFilters);

  return (
    <div className={css.section}>
      <h5>{caption}</h5>
      <ul className={css.properties}>
        {filterItems &&
          filterItems.map((el, idx) => (
            <li
              key={`${caption}@${idx}`}
              className={clsx(filterItemIsOn(el, onFilters) && css.active)}
              onClick={() => dispatch(setOnFilters(el))}
            >
              <svg width="32" height="32">
                <use xlinkHref={`${Sprite}#${el.ico}`} />
              </svg>
              <span>{el.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterPanelSection;
