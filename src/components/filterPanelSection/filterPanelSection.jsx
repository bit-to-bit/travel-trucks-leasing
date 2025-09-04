import css from './FilterPanelSection.module.css';
import Sprite from '../../assets/img/sprite.svg';
const FilterPanelSection = ({caption, filterItems}) => {
  return (
    <div className={css.section}>
      <h5>{caption}</h5>
      <ul className={css.properties}>
          {filterItems &&
            filterItems.map((el, idx) => (
              <li key={`${caption}@${idx}`}>
                  <svg width='32' height='32'>
                    <use xlinkHref={`${Sprite}#${el.ico}`} />
                  </svg>
                  {el.name}
              </li>
            ))}
        </ul>
    </div>
  );
};

export default FilterPanelSection;
