import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCar } from '../../redux/selectors';
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
import css from './Features.module.css';
import { BookingForm } from 'components/BookingForm/BookingForm';

export const Features = () => {
  const car = useSelector(selectorCar);
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperFeatures}>
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
            <div className={css.detailsText}>{car.details.kitchen} kitchen</div>
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
        <div className={css.title}>Vehicle details</div>
        <div className={css.wrapperDescription}>
          <div className={css.wrapperText}>
            <div className={css.text}>Form</div>
            <div className={css.text}>{car.form}</div>
          </div>

          <div className={css.wrapperText}>
            <div className={css.text}>Length</div>
            <div className={css.text}>{car.length}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Width</div>
            <div className={css.text}>{car.width}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Height </div>
            <div className={css.text}>{car.height}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Tank</div>
            <div className={css.text}>{car.tank}</div>
          </div>
          <div className={css.wrapperText}>
            <div className={css.text}>Consumption </div>
            <div className={css.text}>{car.consumption}</div>
          </div>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};
