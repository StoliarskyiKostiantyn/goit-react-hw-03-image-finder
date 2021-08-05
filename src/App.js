import "./App.css";
import { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

export default class App extends Component {
  handleForSubmit = (text) => {
    console.log(text);
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleForSubmit}></Searchbar>
        <ImageGallery></ImageGallery>
      </>
    );
  }
}
