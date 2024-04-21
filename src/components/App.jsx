import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { Suspense } from 'react';

import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../redux/thunks';
import CarDetails from './CarDetails/CarDetails';

const SharedLayout = lazy(() => import('../components/SaredLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="details" element={<CarDetails />}></Route>
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
