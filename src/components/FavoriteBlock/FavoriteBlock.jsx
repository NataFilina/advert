import React from 'react';
import { useSelector } from 'react-redux';
import css from './FavoriteBlock.module.css';

export const FavoriteBlock = () => {
  const { favorites } = useSelector(state => state.favorites);
  console.log(favorites);
  const favoriteCar = favorites.map(favorite => {
    return (
      <div className={css.wrapper}>
        <div className={css.wrapperTitle}>
          <div className={css.title}>{favorite.name}</div>
        </div>
        <div className={css.wrapperRating}>
          <div className={css.rating}>
            <div className={css.iconStar}></div>
            {favorite.rating}({favorite.reviews.length} Reviews)
          </div>
          <div className={css.location}>
            <div className={css.iconLocation}></div>
            {favorite.location}
          </div>
        </div>
        <div className={css.price}> €{favorite.price}.00 </div>
        <div className={css.wrapperImg}>
          <img
            className={css.img}
            src={favorite.gallery[0]}
            alt=""
            width="290"
            height="310"
          />
          <img
            className={css.img}
            src={favorite.gallery[1]}
            alt=""
            width="290"
            height="310"
          />
          <img
            className={css.img}
            src={favorite.gallery[2]}
            alt=""
            width="290"
            height="310"
          />
        </div>
        <div className={css.description}>{favorite.description}</div>
      </div>
    );
  });
  return (
    <>
      <ul className={css.list}>{favoriteCar}</ul>{' '}
    </>
  );
};
