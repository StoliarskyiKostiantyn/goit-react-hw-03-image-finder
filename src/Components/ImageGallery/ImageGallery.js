import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
export default class ImageGallery extends Component {
  state = { text: [], showModal: false, modalUrl: '' };
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
  componentWillUnmount() {
    const list = document.querySelector('ul');
    const { openModal } = this.props;

    list.removeEventListener('click', openModal);
  }
  openModal = evt => {
    if (evt.target.nodeName === 'IMG') {
      this.setState({
        showModal: true,
        modalUrl: evt.target.dataset.big_image,
      });
    }
  };
  closeModal = evt => {
    if (
      evt.target.nodeName === 'DIV' ||
      evt.code === 'Escape'
    ) {
      this.setState({
        showModal: false,
      });
    }
  };
  render() {
    const { text, showModal, modalUrl } = this.state;
    return (
      <>
        <ul className={s.ImageGallery}>
          {this.state.text.map(item => {
            const { id, webformatURL, largeImageURL } =
              item;

            return (
              <>
                <ImageGalleryItem
                  id={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  toggleModal={this.openModal}
                ></ImageGalleryItem>
              </>
            );
          })}
        </ul>
        <Button></Button>
        {this.showModal && (
          <Modal
            id={text.id}
            modalUrl={modalUrl}
            onClick={this.openModal}
          >
            <img src="largeImageURL" alt={text.tag}></img>
            <button onClick={this.openModal}>Close</button>
          </Modal>
        )}
      </>
    );
  }
}
