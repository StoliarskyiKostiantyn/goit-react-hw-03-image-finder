import { Component } from 'react';
export default class ImageGallery extends Component {
  state = {
    imageGallery: {},
  };
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=&page=1&key=21885958-186cb9f8de90f78c5ca194f62&image_type=photo&orientation=horizontal&per_page=12',
    )
      .then(res => res.json())
      .then(imageGallery =>
        this.setState({
          imageGallery,
        }),
      );
  }
  render() {
    console.log(
      this.state.imageGallery
        .hits,
    );
    return (
      <>
        <div>{}</div>
      </>
    );
  }
}
