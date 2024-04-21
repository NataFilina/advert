import React, { useState } from 'react';
import css from './CarsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorItems } from '../../redux/selectors';
import { fetchCar } from '../../redux/thunks';
import { NavLink } from 'react-router-dom';
import heart from '../../images/heart.svg';
import redHeart from '../../images/redHeart.svg';
import { addFavoriteAction } from '../../redux/favoriteSlice';
import users from '../../images/users.svg';
import automatic from '../../images/container.svg';
import ac from '../../images/airCond.svg';
import tv from '../../images/tv.svg';
import wind from '../../images/wind.svg';
import engine from '../../images/petrol.svg';
import kitchen from '../../images/eat.svg';
import beds from '../../images/bed.svg';
import cd from '../../images/cd.svg';
import radio from '../../images/radio.svg';
import hob from '../../images/hob.svg';
import bathroom from '../../images/shower.svg';

const CarList = () => {
  const cars = useSelector(selectorItems);
  const dispatch = useDispatch();
  const [carId, setCarId] = useState([]);
  console.log(cars);
  const oInfo = async id => {
    await dispatch(fetchCar(id));
  };

  const onChange = id => {
    setCarId(id);
  };

  const newCar = cars.map(car => {
    const toFavorite = id => {
      if (id === carId) {
        dispatch(addFavoriteAction(car));
        alert('We added this car to Favorites');

        return `url(${redHeart})`;
      }
      return `url(${heart})`;
    };

    return (
      <li key={car._id} className={css.item}>
        <img className={css.img} src={car.gallery[0]} alt="" width="290" />
        <div className={css.itemWrapper}>
          <div className={css.itemWrapperTitle}>
            <div className={css.name}>{car.name}</div>
            <div className={css.price}>
              €{car.price}.00
              <button
                onClick={() => onChange(car._id)}
                className={css.iconHeart}
                style={{ backgroundImage: toFavorite(car._id) }}
              ></button>
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
          <div className={css.details}>
            <div className={css.detailsElem}>
              <img src={users} alt="adults" width="20" height="20" />
              <div className={css.detailsText}>{car.adults} adults</div>
            </div>

            <div className={css.detailsElem}>
              <img src={automatic} alt="transmission" width="20" height="20" />
              <div className={css.detailsText}>{car.transmission}</div>
            </div>

            <div className={css.detailsElem}>
              <img src={wind} alt="AC" width="20" height="20" />
              <div className={css.detailsText}>
                {car.details.airConditioner} AC
              </div>
            </div>

            <div className={css.detailsElem}>
              <img src={engine} alt="engine" width="20" height="20" />
              <div className={css.detailsText}>{car.engine}</div>
            </div>

            <div className={css.detailsElem}>
              <img src={kitchen} alt="kitchen" width="20" height="20" />
              <div className={css.detailsText}>
                {car.details.kitchen} kitchen
              </div>
            </div>

            <div className={css.detailsElem}>
              <img src={beds} alt="beds" width="20" height="20" />
              <div className={css.detailsText}>{car.details.beds} beds</div>
            </div>

            <div className={css.detailsElem}>
              <img src={cd} alt="CD" width="20" height="20" />
              <div className={css.detailsText}>{car.details.CD} CD</div>
            </div>

            <div className={css.detailsElem}>
              <img src={ac} alt="AC" width="20" height="20" />
              <div className={css.detailsText}>
                {car.details.airConditioner} air conditioner
              </div>
            </div>

            <div className={css.detailsElem}>
              <img src={radio} alt="Radio" width="20" height="20" />
              <div className={css.detailsText}>{car.details.radio} Radio</div>
            </div>

            <div className={css.detailsElem}>
              <img src={tv} alt="TV" width="20" height="20" />
              <div className={css.detailsText}>{car.details.TV} TV</div>
            </div>

            <div className={css.detailsElem}>
              <img src={hob} alt="hob" width="20" height="20" />
              <div className={css.detailsText}>{car.details.hob} hob</div>
            </div>

            <div className={css.detailsElem}>
              <img src={bathroom} alt="bathroom" width="20" height="20" />
              <div className={css.detailsText}>
                {car.details.bathroom} bathroom
              </div>
            </div>
          </div>

          <button
            className={css.btn}
            type="button"
            onClick={() => oInfo(car._id)}
          >
            <NavLink to="/details" className={css.btnLink}>
              Show more
            </NavLink>
          </button>
        </div>
      </li>
    );
  });

  return (
    <>
      <ul className={css.list}>{newCar}</ul>
    </>
  );
};

export default CarList;
