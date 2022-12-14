import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgSearchLoading } from 'react-icons/cg';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imgName: '',
  };

  handleChange = event => {
    this.setState({ imgName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imgName.trim() === '') {
      toast('Enter the name!');
      return;
    }

    this.props.onSubmit(this.state.imgName);
    this.setState({ imgName: '' });
  };

  render() {
    return (
      <header className={css.searchbar} onSubmit={this.handleSubmit}>
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
            value={this.state.imgName}
            onChange={this.handleChange}
          />
        </form>
        <ToastContainer autoClose={3000} />
      </header>
    );
  }
}

export default Searchbar;
