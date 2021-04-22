import axios from 'axios';

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
    // if updater function is undefined then return data
    return updater === undefined ? await data : await updater(data);
  } catch (err) {
    console.error(`fetchOMDB() failed with error ${err}`);
  }
};

export default fetchOMDB;
