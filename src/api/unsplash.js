import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID tGHR4QNgzeV5JqIvqO0oFzvF7rNAWBogPz3g3xFojVo',
  },
});
