import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
export default class ImageGallery extends Component {
  state = { text: [] };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      fetch(`https://pixabay.com/api/?q=${this.props.text}&page=1&key=21885958-186cb9f8de90f78c5ca194f62&image_type=photo&orientation=horizontal&per_page=12  
`)
        .then(res => res.json())
        .then(data => {
          return this.setState({
            text: [...data.hits],
          });
        });
    }
  }
  render() {
    return this.state.text.map(item => {
      const { id, webformatURL, largeImageURL } = item;

      return (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        ></ImageGalleryItem>
      );
    });
  }
}
