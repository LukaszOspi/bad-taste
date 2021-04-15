import axios from 'axios';

// Old implementation with .then(), the new one uses async and try catch.
// const fetchOMDB = (searchQuery, updater) => {
//   const source = axios.CancelToken.source();
//   const apiKeyOMDB = process.env.REACT_APP_OMDB_API_KEY;
//   const searchParams = { s: searchQuery, apikey: apiKeyOMDB };

//   axios
//     .get(`http://www.omdbapi.com/?`, {
//       params: searchParams,
//       cancelToken: source.token,
//     })
//     .then((res) => res.data)
//     .then((data) => updater(data.Search))
//     .catch((err) => {
//       console.error('Catched error: ' + err.message);
//     });
// };

const fetchOMDB = async (searchQuery, updater) => {
  const source = axios.CancelToken.source();
  const apiKeyOMDB = process.env.REACT_APP_OMDB_API_KEY;
  const searchParams = { s: searchQuery, apikey: apiKeyOMDB };

  try {
    const res = await axios.get(`http://www.omdbapi.com/?`, {
      params: searchParams,
      cancelToken: source.token,
    });
    const data = await res.data.Search;
    await updater(data);
  } catch (err) {
    console.error(`fetchOMDB() failed with error ${err}`);
  }
};

export default fetchOMDB;
