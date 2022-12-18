import Button from './Button/Button';
import api from './services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import Loader from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }

    try {
      setIsLoading(true);
      const response = api
        .fetchImages(query, page)
        .finally(() => setIsLoading(false));

      response.then(photos => {
        if (photos.data.totalHits === 0) {
          toast('Enter correct request');
          setPhotos([]);
          return;
        }

        console.log(photos);
        photos.data.hits.forEach(
          ({ id, webformatURL, largeImageURL, tags }) => {
            setPhotos(prev => [
              ...prev,
              { id, webformatURL, largeImageURL, tags },
            ]);
            setTotalPages(Math.ceil(photos.data.totalHits / 12));
            setIsLoading(false);
          }
        );
      });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [query, page, setError]);

  const handleSubmit = name => {
    setQuery(name);
    setPhotos([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onClick = photo => {
    setLargeImage(photo);
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {showModal && <Modal src={largeImage} onClose={onModalClose} />}
      {photos.length > 0 && <ImageGallery items={photos} onClick={onClick} />}
      {photos.length !== 0 && totalPages > page && (
        <Button onLoadMore={loadMore} />
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
