import { Component } from 'react';
import s from './ImageGalleryItem';
export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li
        key={this.props.id}
        className={s.ImageGalleryItem}
      >
        <img
          src={this.props.webformatURL}
          data-big_image={this.props.largeImageURL}
          className={s.ImageGalleryItem_image}
        />
      </li>
    );
  }
}
