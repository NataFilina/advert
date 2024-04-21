import React from 'react';
import css from './FilterBlock.module.css';
import { LocationForm } from 'components/LocationForm/LocationForm';
import { VehicleEquipment } from 'components/VehicleEquipment/VehicleEquipment';
import { VehicleType } from 'components/VehicleType/VehicleType';

const FilterBlock = () => {
  return (
    <div className={css.filter}>
      <LocationForm />
      <div className={css.title}>Filters</div>
      <VehicleEquipment />
      <VehicleType />
      <button className={css.btn}>Search</button>
    </div>
  );
};

export default FilterBlock;
