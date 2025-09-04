import css from './Header.module.css';
import Sprite from '../../assets/img/sprite.svg';
import Navigation from '../navigation/Navigation';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink to='/' className={css.logo}>
        <svg width='136' height='16'>
          <use xlinkHref={`${Sprite}#icon-logo`} />
        </svg>
      </NavLink>

      <Navigation />
    </header>
  );
};

export default Header;
