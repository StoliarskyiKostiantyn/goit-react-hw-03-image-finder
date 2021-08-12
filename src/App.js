import './App.css';
import { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
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
          onSubmit={this.handleForSubmit}
        ></Searchbar>
        <ImageGallery text={this.state.text}></ImageGallery>
        <Button></Button>
      </>
    );
  }
}
