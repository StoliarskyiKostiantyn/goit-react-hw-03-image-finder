import React from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';
export default function Searchbar({ onSubmit }) {
  return (
    <>
      <header className={s.Searchbar}>
        <form
          className={s.SearchForm}
          onSubmit={onSubmit}
          name="text"
        >
          <button
            type="submit"
            className={s.SearchForm_button}
          >
            <span
              className={s.SearchForm_button_label}
            ></span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="text"
          />
        </form>
      </header>
    </>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
