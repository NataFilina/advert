import css from './BookingForm.module.css';

export const BookingForm = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>Book your campervan now</div>
      <div className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </div>
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
          type="text"
          name="date"
          placeholder="Booking date"
          required
        ></input>
        <textarea
          className={css.textarea}
          name="message"
          placeholder="Comment"
        ></textarea>
        <button className={css.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
