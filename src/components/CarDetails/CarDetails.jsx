import { CarInfo } from '../CarInfo/CarInfo';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const CarDetails = () => {
  return (
    <>
      <CarInfo />
      <Link to="features">Features</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CarDetails;
