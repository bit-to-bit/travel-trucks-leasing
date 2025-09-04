import { filterVehicleEquipment } from "./constants";

export const getCamperProperties = (camper) => {
  const res = filterVehicleEquipment
    .filter((el) => el.trueValue === camper[el.key])
    .map((el) => el.name);
  return res;
};

export const cropText = (text) => text.substr(0, 68) + "...";
