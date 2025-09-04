import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className={css.heroImage}>
        <div className={css.heroText}>
          <h1>Campers of your dreams</h1>
          <p>You can find everything you want in our catalog</p>
          <button>
            <NavLink to='/catalog'>View Now</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;