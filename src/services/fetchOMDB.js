import axios from 'axios';

const fetchOMDB = (searchQuery, updater) => {
  const source = axios.CancelToken.source();
  const apiKeyOMDB = process.env.REACT_APP_OMDB_API_KEY;

  axios
    .get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKeyOMDB}`, {
      cancelToken: source.token,
    })
    .then((res) => res.data)
    .then((data) => updater(data.Search))
    .catch((err) => {
      console.error('Catched error: ' + err.message);
    });
};

export default fetchOMDB;
