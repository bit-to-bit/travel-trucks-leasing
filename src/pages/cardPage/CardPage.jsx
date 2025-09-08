import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CamperInfo from "../../components/camperInfo/CamperInfo";
import CamperDetails from "../../components/camperDetails/CamperDetails";
import { fetchCamper } from "../../api/campers";

const CardPage = () => {
  const { id: camperId } = useParams();
  const { camper, isLoading, error } = useSelector((state) => state.campers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamper(camperId));
  }, [dispatch, camperId]);
  console.dir(camper);
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
