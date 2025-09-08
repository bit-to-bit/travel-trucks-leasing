import css from "./FilterPanel.module.css";
import FilterLocation from "../filterLocation/FilterLocation";
import FilterPanelSection from "../filterPanelSection/FilterPanelSection";
import { filterVehicleEquipment, filterVehicleType } from "../../constants";

const FilterPanel = () => {
  return (
    <div className={css.filter}>
      <h4>Location</h4>
      <FilterLocation />
      <h4>Filters</h4>
      <FilterPanelSection
        caption="Vehicle equipment"
        filterItems={filterVehicleEquipment}
      />
      <FilterPanelSection
        caption="Vehicle type"
        filterItems={filterVehicleType}
      />
    </div>
  );
};

export default FilterPanel;
