import fetchJsonp from 'fetch-jsonp';

const fetchTasteDive = (searchQuery, updater) => {
  const apiKeyTasteDive = process.env.REACT_APP_TASTE_DIVE_API_KEY;

  fetchJsonp(
    `https://tastedive.com/api/similar?q=${searchQuery}&info=1&k=${apiKeyTasteDive}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json.Similar.Results);
      updater(json.Similar.Results);
    })
    .catch((ex) => {
      console.log('parsing failed', ex);
    });
};

export default fetchTasteDive;
