import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem';
export default class ImageGalleryItem extends Component {
  state = { response: [], error: null };
  componentDidMount() {
    const list = document.querySelector('ul');
    const { openModal } = this.props;

    this.fetchImagesByName();

    list.addEventListener('click', openModal);
  }
  componentDidUpdate(prevProps, prevState) {
    const { text, page, scroll } = this.props;

    if (prevProps.text !== text) {
      this.setState({
        response: [],
      });

      this.fetchImagesByName();
    }

    if (prevProps.page !== page) {
      this.fetchImagesByName().then(scroll);
    }
  }
  componentWillUnmount() {
    const list = document.querySelector('ul');
    const { openModal } = this.props;

    list.removeEventListener('click', openModal);
  }
  fetchImagesByName = () => {
    const API_KEY = '21885958-186cb9f8de90f78c5ca194f62';
    const { text, page } = this.props;
    const errorMessage = `Изображений по ключевому слову ${text} не найдено`;

    return fetch(
      `https://pixabay.com/api/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.hits.length === 0) {
          return Promise.reject(new Error(errorMessage));
        }
        return this.setState(prevState => ({
          response: [...prevState.response, ...data.hits],
        }));
      })
      .catch(error => alert(error.message))
      .finally(() => {
        this.props.hideLoader();
      });
  };
  render() {
    return this.state.response.map(item => {
      const { id, webformatURL, tags, largeImageURL } =
        item;

      return (
        <li key={id}>
          <img
            src={webformatURL}
            alt={tags}
            data-big_image={largeImageURL}
          />
        </li>
      );
    });
  }
}
ImageGalleryItem.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
