import { Component } from 'react';
export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <img
          src={this.props.webformatURL}
          data-big_image={this.props.largeImageURL}
        />
      </li>
    );
  }
}
