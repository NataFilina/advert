import { CarInfo } from '../CarInfo/CarInfo';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './CarDetails.module.css';

const CarDetails = () => {
  return (
    <div className={css.wrapper}>
      <CarInfo />

      <div className={css.wrapperLink}>
        <NavLink className={css.navLink} to="features">
          Features
        </NavLink>
        <NavLink className={css.navLink} to="reviews">
          Reviews
        </NavLink>
      </div>

      <div className={css.line}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="902"
          height="2"
          viewBox="0 0 902 2"
          fill="none"
        >
          <path d="M0 1H902" stroke="#101828" stroke-opacity="0.2" />
        </svg>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CarDetails;
