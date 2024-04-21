import React, { useState } from 'react';
import css from './LocationForm.module.css';

export const LocationForm = () => {
  const [location, setLocation] = useState('');

  const handleChange = event => {
    setLocation(event.currentTarget.value);
  };

  return (
    <>
      <label className={css.label}>
        Location
        <input
          className={css.input}
          type="text"
          name="location"
          required
          value={location}
          onChange={handleChange}
          placeholder="Kyiv, Ukraine"
        />
      </label>
    </>
  );
};
