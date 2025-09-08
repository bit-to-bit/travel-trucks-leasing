import FilterPanel from "../../components/filterPanel/FilterPanel";
import { ClipLoader } from "react-spinners";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../api/campers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/camperList/CamperList";
import { selectIsLoading } from "../../redux/campersSlice";

const override = {
  display: "block",
  margin: "0 auto",
};

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      <FilterPanel />
      <ClipLoader
        color="#E44848"
        loading={isLoading}
        cssOverride={override}
        size={48}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <CamperList />
    </div>
  );
};

export default CatalogPage;
