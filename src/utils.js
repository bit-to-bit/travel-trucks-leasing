import { filterVehicleEquipment } from "./constants";

export const getCamperProperties = (camper) => {
  const res = filterVehicleEquipment
    .filter((el) => el.trueValue === camper[el.key])
    .map((el) => el.name);
  return res;
};

export const getReviewsSummary = (camper) => {
  if (camper === null) {
    return null;
  }

  const reviews = camper.reviews;

  if (reviews === null) {
    return null;
  }

  const cntReviews = reviews.length;

  if (cntReviews === 0) {
    return "0.0 (0 Reviews)";
  }

  const sumRatings = reviews.reduce((acc, el) => acc + el.reviewer_rating, 0);

  return `${(sumRatings / cntReviews).toFixed(1)} (${cntReviews} Reviews)`;
};

export const cropText = (text) => text.substr(0, 68) + "...";
