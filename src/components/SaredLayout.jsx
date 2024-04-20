import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { Loader } from './Loader/Loader';


const SharedLayout = () => {

  return (
    <>
      <header>
        <div className={css.nav}>
          <NavLink className={css.btns} to="/">
           Home
          </NavLink>
          <NavLink to="/catalog" className={css.btns}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={css.btns}>
            Favorites
          </NavLink>
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
