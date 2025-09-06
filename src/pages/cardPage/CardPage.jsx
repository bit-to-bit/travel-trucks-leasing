import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CamperInfo from "../../components/camperInfo/CamperInfo";
import CamperDetails from "../../components/camperDetails/camperDetails";
import { fetchCamper } from "../../api/campers";
import css from "./CardPage.module.css";

const CardPage = () => {
  const { id: camperId } = useParams();
  const { camper, isLoading, error } = useSelector((state) => state.campers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamper(camperId));
  }, [dispatch, camperId]);

  return (
    <section>
      {isLoading && <p>Is Loading ...</p>}
      {error && <p>Is Error</p>}
      <CamperInfo camper={camper} />
      <CamperDetails />
    </section>
  );
};

export default CardPage;
