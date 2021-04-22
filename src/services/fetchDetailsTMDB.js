import axios from 'axios';

const fetchDetailsTMDB = async (searchID, updater) => {
  const source = axios.CancelToken.source();
  const apiKeyTMDB = process.env.REACT_APP_TMDB_API_KEY;
  const searchParams = { api_key: apiKeyTMDB };

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${searchID}?`,
      {
        params: searchParams,
        cancelToken: source.token,
      }
    );
    const data = await res.data;
    // if updater function is undefined then return data
    return updater === undefined ? await data : await updater(data);
  } catch (err) {
    console.error(`fetchDetailsTMDB() failed with error ${err}`);
  }
};

export default fetchDetailsTMDB;
