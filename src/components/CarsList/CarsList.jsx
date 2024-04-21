import React from 'react';
import css from './CarsList.module.css';
import { Details } from 'components/Details/Details';

const CarList = ({ cars }) => {
  console.log(cars);
  const newContact = cars.map(car => {
    return (
      <>
        <li key={car._id} className={css.item}>
          <img className={css.img} src={car.gallery[0]} alt="" width="290" />
          <div className={css.itemWrapper}>
            <div className={css.itemWrapperTitle}>
              <div className={css.name}>{car.name}</div>
              <div className={css.price}>
                €{car.price}.00 <div className={css.iconHeart}></div>
              </div>
            </div>
            <div className={css.itemWrapperRating}>
              <div className={css.rating}>
                <div className={css.iconStar}></div>
                {car.rating}({car.reviews.length} Reviews)
              </div>
              <div className={css.location}>
                <div className={css.iconLocation}></div>
                {car.location}
              </div>
            </div>
            <div className={css.description}>{car.description}</div>
            <ul>
              <Details />
            </ul>

            <button
              className={css.btn}
              type="button"
              // onClick={() => onDelete(id)}
            >
              Show more
            </button>
          </div>
        </li>
      </>
    );
  });

  return <ul className={css.list}>{newContact}</ul>;
};

export default CarList;
