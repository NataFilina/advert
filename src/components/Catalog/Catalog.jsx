import React from 'react';
import FilterBlock from 'components/FilterBlock/FilterBlock';
import CarsList from 'components/CarsList/CarsList';
import css from './Catalog.module.css';

export const Catalog = () => {
  return (
    <div className={css.wrapper}>
      <FilterBlock />
      <CarsList />
    </div>
  );
};
