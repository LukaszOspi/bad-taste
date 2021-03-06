import axios from 'axios';

const fetchDetailsTMDB = async (searchID, type) => {
  const source = axios.CancelToken.source();
  const apiKeyTMDB = process.env.REACT_APP_TMDB_API_KEY;
  const searchParams = { api_key: apiKeyTMDB, append_to_response: 'videos' };

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${searchID}?`,
      {
        params: searchParams,
        cancelToken: source.token,
      }
    );
    const data = await res.data;
    return await data;
  } catch (err) {
    console.error(`fetchDetailsTMDB() failed with error ${err}`);
  }
};

export default fetchDetailsTMDB;
