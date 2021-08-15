import './App.css';
import { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
export default class App extends Component {
  state = {
    text: [],
  };

  handleForSubmit = text => {
    this.setState({ text });
  };
  render() {
    const { text, showModal } = this.state;
    return (
      <>
        <Searchbar
          onSubmit={this.handleForSubmit}
        ></Searchbar>
        <ImageGallery
          text={text}
          onClick={this.toggleModal}
        ></ImageGallery>
      </>
    );
  }
}
