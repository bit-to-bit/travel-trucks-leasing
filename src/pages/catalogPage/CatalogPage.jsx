import FilterPanel from '../../components/filterPanel/FilterPanel';
import css from './CatalogPage.module.css';
import { fetchCampers } from '../../api/campers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../../components/camperList/CamperList';

const CatalogPage = () => {
  const { campers, isLoading, error } = useSelector(state => state.campers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      <FilterPanel />
      {isLoading && <p>Is Loading ...</p>}
      {error && <p>Is Error</p>}
      <CamperList campers={campers} />
    </div>
  );
};

export default CatalogPage;
