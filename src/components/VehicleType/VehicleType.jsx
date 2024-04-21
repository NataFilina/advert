import React from 'react';
import van from '../../images/camper-window.svg';
import fullyIntegrated from '../../images/camper-door.svg';
import alcove from '../../images/camper-full.svg';
import css from './VehicleType.module.css';

export const VehicleType = () => {
  return (
    <div>
      <h2 className={css.title}>Vehicle type</h2>
      <div className={css.wrapper}>
        <div className={css.card}>
          <img className={css.icon} src={van} alt="wind" />
          <p className={css.text}>Van</p>
        </div>
        <div className={css.card}>
          <img className={css.icon} src={fullyIntegrated} alt="wind" />
          <p className={css.text}>Fully Integrated</p>
        </div>
        <div className={css.card}>
          <img className={css.icon} src={alcove} alt="wind" />
          <p className={css.text}>Alcove</p>
        </div>
      </div>
    </div>
  );
};
