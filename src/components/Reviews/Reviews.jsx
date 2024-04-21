import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCar } from '../../redux/selectors';
import css from './Reviews.module.css';
import { BookingForm } from 'components/BookingForm/BookingForm';

export const Reviews = () => {
  const car = useSelector(selectorCar);
  const newReviews = car.reviews.map((review, ind) => {
    return (
      <li key={ind} className={css.item}>
        <div className={css.wrapperAvatar}>
          <div className={css.round}>
            <div className={css.roundLater}>{review.reviewer_name[0]}</div>
          </div>
          <div className={css.wrapperName}>
            <div className={css.name}>{review.reviewer_name}</div>
            <div className={css.rating}>
              <div className={css.iconStar}></div>
              {review.reviewer_rating}
            </div>
          </div>
        </div>
        <div className={css.comment}>{review.comment}</div>
      </li>
    );
  });
  return (
    <div className={css.wrapper}>
      <ul>{newReviews}</ul>
      <BookingForm />
    </div>
  );
};
