import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} onClick={onClick} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;
