import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgSearchLoading } from 'react-icons/cg';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [imgName, setImgName] = useState('');

  const handleChange = event => {
    setImgName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imgName.trim() === '') {
      toast('Enter the name!');
      return;
    }

    onSubmit(imgName);
    setImgName('');
  };

  return (
    <header className={css.searchbar} onSubmit={handleSubmit}>
      <form className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <CgSearchLoading
            className={css.searchFormIcon}
            size={30}
            color={'#3f51b5'}
          />
          <span className={css.searchFormButton__label}>Search</span>
        </button>
        <input
          className={css.searchForm__input}
          type="text"
          name="imgName"
          placeholder="Search images and photos"
          value={imgName}
          onChange={handleChange}
        />
      </form>
      <ToastContainer autoClose={3000} />
    </header>
  );
}

export default Searchbar;
