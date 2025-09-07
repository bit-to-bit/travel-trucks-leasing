import { Link, useLocation } from "react-router-dom";
import css from "./CamperLink.module.css";

const CamperLink = ({ camper }) => {
  const location = useLocation();
  return (
    <Link
      className={css.button}
      to={`${location.pathname === "/" ? "catalog/" : ""}${camper.id}/features`}
      state={location}
    >
      Show more
    </Link>
  );
};

export default CamperLink;
