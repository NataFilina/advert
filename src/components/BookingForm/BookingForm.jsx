import css from './FormRegistration.module.css';
import { NavLink } from 'react-router-dom';

export const BookingForm = () => {
  return (
    <>
      <NavLink className={css.btnHome} to="/">
        Back to home
      </NavLink>

      <form className={css.form}>
        <input
          className={css.input}
          placeholder="Name"
          type="text"
          name="name"
          required
        />
        <input
          className={css.input}
          placeholder="Email"
          type="email"
          name="email"
          required
        ></input>
        <input
          className={css.input}
          placeholder="Booking date"
          type="date"
          name="date"
          required
        ></input>
        <textarea name="message" placeholder="Comment"></textarea>
        <button className={css.btn} type="submit">
          Send
        </button>
      </form>
    </>
  );
};
