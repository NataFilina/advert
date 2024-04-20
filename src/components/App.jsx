import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { refreshThunk } from '../redux/thunks';
import { Loader } from './Loader/Loader';

const SharedLayout = lazy(() => import('../components/SaredLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const FavoritesPage = lazy(()=> import('../pages/FavoritesPage'))
const NotFound = lazy(() => import('../pages/NotFound'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="catalog"
              element={<CatalogPage />}/>
             <Route
              path="favorites"
              element={<FavoritesPage />}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
