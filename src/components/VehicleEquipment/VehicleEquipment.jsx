import React from 'react';
import wind from '../../images/wind.svg';
import automatic from '../../images/container.svg';
import kitchen from '../../images/eat.svg';
import tv from '../../images/tv.svg';
import shower from '../../images/shower.svg';
import css from './VehicleEquipment.module.css';

export const VehicleEquipment = () => {
  return (
    <div>
      <h2 className={css.title}>Vehicle equipment</h2>
      <div className={css.wrapper}>
        <div className={css.card}>
          <img className={css.icon} src={wind} alt="wind" />
          <p className={css.text}>AC</p>
        </div>
        <div className={css.card}>
          <img className={css.icon} src={automatic} alt="wind" />
          <p>Automatic</p>
        </div>
        <div className={css.card}>
          <img className={css.icon} src={kitchen} alt="wind" />
          <p>Kitchen</p>
        </div>
        <div className={css.card}>
          <img className={css.icon} src={tv} alt="wind" />
          <p>TV</p>
        </div>
        <div className={css.card}>
          <img className={css.icon} src={shower} alt="wind" />
          <p>Shower/WC</p>
        </div>
      </div>
    </div>
  );
};
