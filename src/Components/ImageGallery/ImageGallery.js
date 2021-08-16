import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
export default class ImageGallery extends Component {
  state = {
    page: 1,
    modalUrl: '',
    modalIsOpen: false,
  };
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  increasePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  openModal = evt => {
    if (evt.target.nodeName === 'img') {
      this.setState({
        modalIsOpen: true,
        modalUrl: evt.target.dataset.big_image,
      });
    }
  };

  closeModal = evt => {
    if (
      evt.target.nodeName === 'div' ||
      evt.code === 'Escape'
    ) {
      this.setState({
        modalIsOpen: false,
      });
    }
  };
  render() {
    const { modalIsOpen, modalUrl, page } = this.state;
    const { text, hideLoader } = this.props;

    return (
      <>
        <div>
          <ul>
            <ImageGalleryItem
              openModal={this.openModal}
              hideLoader={hideLoader}
              text={text}
              page={page}
              scroll={this.scroll}
            />
          </ul>
        </div>
        <Button onClick={this.increasePage} />
        {modalIsOpen && (
          <Modal
            url={modalUrl}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
ImageGallery.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
