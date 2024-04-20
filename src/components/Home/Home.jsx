import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

function Home() {

  return (
    <>
      <h1 className={css.mainTitle}>Car booking</h1>
        <div className={css.wrapper}>
          <p className={css.title}>Welcome!</p>
          <p className={css.text}>Enjoy using our application✨</p>
          <p className={css.title}>
            You can use our website to choose and book the best car.
        </p>
        Let's go to <NavLink to="/catalog">catalog</NavLink> and let's start selecting your dream car🚙
        </div>
     
    </>
  );
}

export default Home;
