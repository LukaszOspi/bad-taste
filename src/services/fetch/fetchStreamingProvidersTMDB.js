import axios from 'axios';

const fetchStreamingProvidersTMDB = async (searchID, type) => {
  const source = axios.CancelToken.source();
  const apiKeyTMDB = process.env.REACT_APP_TMDB_API_KEY;
  const searchParams = { api_key: apiKeyTMDB };

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${searchID}/watch/providers?`,
      {
        params: searchParams,
        cancelToken: source.token,
      }
    );
    const data = await res.data.results.DE;
    return await data;
  } catch (err) {
    console.error(`fetchStreamingProvidersTMDB() failed with error ${err}`);
  }
};

export default fetchStreamingProvidersTMDB;
