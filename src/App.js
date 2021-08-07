import './App.css';
import { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './Components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    text: '',
  };
  handleForSubmit = text => {
    this.setState({ text });
  };
  render() {
    return (
      <>
        <Searchbar
          onSubmit={
            this
              .handleForSubmit
          }
        ></Searchbar>
        {/* <ImageGallery></ImageGallery> */}
        <ImageGalleryItem
          text={
            this.state.text
          }
        ></ImageGalleryItem>
      </>
    );
  }
}
