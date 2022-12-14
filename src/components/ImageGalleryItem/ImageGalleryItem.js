import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItem__image}
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => onClick(item.largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
