import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

import Header from './components/header/Header';

import css from './App.module.css';
import CatalogPage from './pages/catalogPage/CatalogPage';

const App = () => {
  return (
    <div>
      <Header />
      <main className={css.main}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/movies/:movieId' element={<HomePage />}>
            <Route path='cast' element={<HomePage />} />
            <Route path='reviews' element={<HomePage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;