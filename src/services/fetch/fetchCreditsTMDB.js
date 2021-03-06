import axios from 'axios';

const fetchCreditsTMDB = async (searchQuery, type) => {
  const source = axios.CancelToken.source();
  const apiKeyTMDB = process.env.REACT_APP_TMDB_API_KEY;
  const searchParams = { query: searchQuery, api_key: apiKeyTMDB };

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${searchQuery}/credits?`,
      {
        params: searchParams,
        cancelToken: source.token,
      }
    );

    const data = await res.data;
    return await data;
  } catch (err) {
    console.error(`fetchCreditsTMDB() failed with error ${err}`);
  }
};

export default fetchCreditsTMDB;
