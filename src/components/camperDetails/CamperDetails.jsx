import { useLocation, Outlet, Link } from "react-router-dom";
import css from "./CamperDetails.module.css";
import BookingForm from "../bookingForm/BookingForm";

const CamperDetails = () => {
  const location = useLocation();

  return (
    <div className={css.details}>
      <ul className={css.navigation}>
        <li>
          <Link to="features" state={location}>
            Features
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location}>
            Reviews
          </Link>
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
