import axios from "axios";
const KEY = '30573092-ee1d5b60b5a26f0dd8b37d65c';
const URL = 'https://pixabay.com/api/';
async function fetchImages(name,page){
    const response = await axios.get(`${URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response;
}
const api = {
    fetchImages,
  };
  export default api;