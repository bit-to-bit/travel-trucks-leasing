import { useLocation, Outlet, NavLink } from "react-router-dom";
import css from "./CamperDetails.module.css";
import BookingForm from "../bookingForm/BookingForm";

const CamperDetails = () => {
  const location = useLocation();

  return (
    <div className={css.details}>
      <ul className={css.navigation}>
        <li>
          <NavLink
            to="features"
            state={location}
            className={({ isActive }) => (isActive ? css.active : null)}
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            state={location}
            className={({ isActive }) => (isActive ? css.active : null)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.content}>
        <div className={css.outlet}>
          <Outlet />
        </div>
        <div className={css.booking}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
