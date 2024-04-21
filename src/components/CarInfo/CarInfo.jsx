import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCar } from '../../redux/selectors';
import css from './CarInfo.module.css';

const CarInfo = async () => {
  const car = useSelector(selectorCar);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperTitle}>
        <div className={css.title}>{car.name}</div>
      </div>
      <div className={css.wrapperRating}>
        <div className={css.rating}>
          <div className={css.iconStar}></div>
          {car.rating}({car.reviews.length} Reviews)
        </div>
        <div className={css.location}>
          <div className={css.iconLocation}></div>
          {car.location}
        </div>
      </div>
      <div className={css.price}> €{car.price}.00 </div>
      <div className={css.wrapperImg}>
        <img
          className={css.img}
          src={car.gallery[0]}
          alt=""
          width="290"
          height="310"
        />
        <img
          className={css.img}
          src={car.gallery[1]}
          alt=""
          width="290"
          height="310"
        />
        <img
          className={css.img}
          src={car.gallery[2]}
          alt=""
          width="290"
          height="310"
        />
      </div>
      <div className={css.description}>{car.description}</div>
    </div>
  );
};

export default CarInfo;
