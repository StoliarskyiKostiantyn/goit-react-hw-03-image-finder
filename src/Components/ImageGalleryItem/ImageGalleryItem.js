import { Component } from 'react';
export default class ImageGalleryItem extends Component {
  componentDidUpdate(
    prevProps,
    prevState,
  ) {
    if (
      prevProps.text !==
      this.props.text
    ) {
      console.log(
        'Text changed',
      );
      console.log(
        'prevProps:',
        prevProps.text,
      );
      console.log(
        'this.props.text',
        this.props.text,
      );
      fetch(`https://pixabay.com/api/?q=${this.props.text}&page=1&key=21885958-186cb9f8de90f78c5ca194f62&image_type=photo&orientation=horizontal&per_page=12
`)
        .then(res =>
          res.json(),
        )
        .then(console.log);
    }
  }
  render() {
    return (
      <>
        <div>
          <h1>Text</h1>
          <p>
            {this.props.text}
          </p>
        </div>
      </>
    );
  }
}
