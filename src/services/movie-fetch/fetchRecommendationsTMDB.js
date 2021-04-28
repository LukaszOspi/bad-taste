import axios from 'axios';

const fetchRecommendationsTMDB = async (searchID, updater) => {
  const source = axios.CancelToken.source();
  const apiKeyTMDB = process.env.REACT_APP_TMDB_API_KEY;
  const searchParams = { api_key: apiKeyTMDB };

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${searchID}/recommendations?`,
      {
        params: searchParams,
        cancelToken: source.token,
      }
    );
    const data = await res.data.results;
    // filter out movies without a poster image
    const filteredData = data.filter((media) => media.poster_path !== null);
    // if updater function is undefined then return data
    return updater === undefined
      ? await filteredData
      : await updater(filteredData);
  } catch (err) {
    console.error(`fetchRecommendationsTMDB() failed with error ${err}`);
  }
};

export default fetchRecommendationsTMDB;
