import React from 'react';
import FilterBlock from 'components/FilterBlock/FilterBlock';
import CarsList from 'components/CarsList/CarsList';
import { useFetchCars } from 'hooks/useFetchCars';
import css from './Catalog.module.css';

export const Catalog = () => {
  const { cars } = useFetchCars();

  return (
    <div className={css.wrapper}>
      <FilterBlock />
      <CarsList cars={cars} />
    </div>
  );
};
