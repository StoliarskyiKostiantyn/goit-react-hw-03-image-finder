import './App.css';
import React, { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Loaders from './Components/Loader/Loader';
export default class App extends Component {
  state = {
    text: '',
    loaderAreShown: false,
  };

  handleSubmit = evt => {
    const inputValue = evt.target[0].value;
    this.setState(prevState => ({
      loaderAreShown: true,
    }));
    evt.preventDefault();
    if (inputValue.trim() === '') {
      alert('Введите ключевое слово для поиска картинок');
      return;
    }
    this.setState({ text: inputValue });
    evt.target[0].value = '';
  };
  showLoader = () => {
    this.setState(prevState => ({
      loaderAreShown: true,
    }));
  };
  hideLoader = () => {
    this.setState(prevState => ({
      loaderAreShown: false,
    }));
  };
  render() {
    const { text, loaderAreShown } = this.state;
    const textCheck = this.state.text === '';
    return (
      <>
        <div>
          <Searchbar
            onSubmit={this.handleSubmit}
          ></Searchbar>
          {loaderAreShown && <Loaders />}
          {!textCheck && (
            <ImageGallery
              text={text}
              hideLoader={this.hideLoader}
            />
          )}
        </div>
      </>
    );
  }
}
