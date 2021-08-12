import React, { Component } from 'react';
import s from './Searchbar.module.css';
export default class Searchbar extends Component {
  state = {
    text: '',
  };
  handleTextChange = e => {
    this.setState({
      text: e.currentTarget.value.toLowerCase(),
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.trim() === '') {
      alert('NAME MTHF');
      return;
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <>
        <header className={s.Searchbar}>
          <form
            className={s.SearchForm}
            onSubmit={this.handleSubmit}
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
              name="picName"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </form>
        </header>
      </>
    );
  }
}
