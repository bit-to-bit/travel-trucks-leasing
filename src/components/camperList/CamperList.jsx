import { useSelector } from "react-redux";
import { selectFiltredCampers } from "../../redux/campersSlice";
import CamperCard from "../camperCard/CamperCard";
import css from "./CamperList.module.css";
const CamperList = () => {
  const campers = useSelector(selectFiltredCampers);
  return (
    <ul className={css.campers}>
      {campers &&
        campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
    </ul>
  );
};

export default CamperList;
