import CarInfo from '../CarInfo/CarInfo';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectorCar } from 'redux/selectors';

const MovieDetails = () => {
  const car = useSelector(selectorCar);

  return (
    <>
      <CarInfo movie={car} />
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
        <li>
          <Link
            to="cast"
            style={{
              margin: '0',
              padding: '5px',
              color: 'rgb(56, 35, 1)',
              fontWeight: '400',
              lineHeight: '120%',
              border: '1px solid rgb(201, 166, 109)',
              borderRadius: '10px',
              boxShadow: '0px 2px 10px 1px rgb(212, 186, 145)',
              textDecoration: 'none',
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            style={{
              margin: '0',
              padding: '5px',
              color: 'rgb(56, 35, 1)',
              fontWeight: '400',
              lineHeight: '120%',
              border: '1px solid rgb(201, 166, 109)',
              borderRadius: '10px',
              boxShadow: '0px 2px 10px 1px rgb(212, 186, 145)',
              textDecoration: 'none',
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
