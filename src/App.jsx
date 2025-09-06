import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import CardPage from "./pages/cardPage/CardPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Header from "./components/header/Header";
import CamperFeatures from "./components/camperFeatures/CamperFeatures";
import CamperReviews from "./components/camperReviews/CamperReviews";
import css from "./App.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <main className={css.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CardPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
