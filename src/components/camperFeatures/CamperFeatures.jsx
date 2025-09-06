import { useDispatch, useSelector } from "react-redux";
import { selectCamper } from "../../redux/campersSlice";
import css from "./CamperFeatures.module.css";
const CamperFeatures = () => {
  const camper = useSelector(selectCamper);
  console.dir(camper);
  return (
    <div className={css.features}>
      <div>CamperFeatures</div>
      <div>{camper && camper.name}</div>
      <h4>Vehicle details</h4>

      <ul>
        <li>
          <p>Form</p>
          <p>{camper && camper.form}</p>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
