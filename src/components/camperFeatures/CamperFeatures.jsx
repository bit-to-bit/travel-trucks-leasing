import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/campersSlice";
import CamperProperties from "../camperProperties/CamperProperties";
import css from "./CamperFeatures.module.css";
const CamperFeatures = () => {
  const camperDetails = useSelector(selectCamperDetails);
  return (
    <div className={css.features}>
      <CamperProperties />
      <h4>Vehicle details</h4>
      <dl className={css.details}>
        {camperDetails &&
          camperDetails.map((camperDetails, idx) => (
            <div key={idx}>
              <dt>{camperDetails.item}</dt>
              <dd>{camperDetails.value}</dd>
            </div>
          ))}
      </dl>
    </div>
  );
};

export default CamperFeatures;
