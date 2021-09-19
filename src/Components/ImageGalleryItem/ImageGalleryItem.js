import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem';
import api from '../../services/imgAPI';
export default class ImageGalleryItem extends Component {
  state = { response: [], error: null };
  componentDidMount() {
    const list = document.querySelector('ul');
    const { openModal } = this.props;
    this.fetchImagesByName();
    list.addEventListener('click', openModal);
  }
  componentDidUpdate(prevProps, prevState) {
    const { search, page, scroll } = this.props;
    if (prevProps.search !== search) {
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
    const { search, page } = this.props;
    const errorMessage = `Изображений по ключевому слову ${search} не найдено`;
    return api
      .fetchImg(search, page)
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
        <li key={id} className={s.ImageGalleryItem}>
          <a>
            <img
              src={webformatURL}
              alt={tags}
              data-big_image={largeImageURL}
              className={s.ImageGalleryItem_image}
            />
          </a>
        </li>
      );
    });
  }
}
ImageGalleryItem.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
};
