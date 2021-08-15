import { Component } from 'react';
import s from './ImageGalleryItem';
export default class ImageGalleryItem extends Component {
  componentDidMount() {
    const list = document.querySelector('ul');
    const { openModal } = this.props;

    // this.fetchImagesByName();

    list.addEventListener('click', openModal);
  }

  render() {
    return (
      <li
        key={this.props.id}
        className={s.ImageGalleryItem}
        openModal={this.props.openModal}
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
