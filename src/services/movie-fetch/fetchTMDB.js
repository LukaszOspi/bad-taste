import axios from 'axios';

const fetchTMDB = async (searchQuery, updater, type) => {
  const source = axios.CancelToken.source();
  const apiKeyTMDB = process.env.REACT_APP_TMDB_API_KEY;
  const searchParams = { query: searchQuery, api_key: apiKeyTMDB };

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/${type}?`,
      {
        params: searchParams,
        cancelToken: source.token,
      }
    );
    const data = await res.data.results;
    // filter out movies without a poster image
    const filteredData = data.filter((media) => media.poster_path !== null);
    // order list by popularity index
    filteredData.sort((a, b) => b.popularity - a.popularity);
    // if updater function is undefined then return data
    return updater === undefined
      ? await filteredData
      : await updater(filteredData);
  } catch (err) {
    console.error(`fetchTMDB() failed with error ${err}`);
  }
};

export default fetchTMDB;
