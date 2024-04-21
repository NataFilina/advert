import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCar } from '../../redux/selectors';
import { DescriptionDetails } from 'components/DescriptionDetails/DescriptionDetails';
import css from './Features.module.css';
import { BookingForm } from 'components/BookingForm/BookingForm';

export const Features = () => {
  const car = useSelector(selectorCar);
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperFeatures}>
        <DescriptionDetails />
        <div className={css.title}>Vehicle details</div>
        <div className={css.wrapperDescription}>
          <div className={css.wrapperText}>
            <div className={css.text}>Form</div>
            <div className={css.text}>{car.form}</div>
          </div>

          <div className={css.wrapperText}>
            <div className={css.text}>Length</div>
            <div className={css.text}>{car.length}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Width</div>
            <div className={css.text}>{car.width}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Height </div>
            <div className={css.text}>{car.height}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Tank</div>
            <div className={css.text}>{car.tank}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Consumption </div>
            <div className={css.text}>{car.consumption}</div>
          </div>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};
