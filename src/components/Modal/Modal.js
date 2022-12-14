import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';
class Modal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleModal);
  }
  handleModal = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };
  backdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={css.overlay} onClick={this.backdropClick}>
        <div className={css.modal}>
          <img src={this.props.src} alt="largeImage" />
        </div>
      </div>
    );
  }
}
export default Modal;
