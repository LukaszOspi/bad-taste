import axios from 'axios';

const fetchOMDB = (search, updater) => {
  const source = axios.CancelToken.source();
  const apiKey = 'aa82963a';

  axios
    .get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`, {
      cancelToken: source.token,
    })
    .then((res) => res.data)
    .then((data) => updater(data.Search))
    .catch((err) => {
      console.error('Catched error: ' + err.message);
    });
};

export default fetchOMDB;
