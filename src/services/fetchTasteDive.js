import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';

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
    .catch((error) => {
      console.log('parsing failed', error);
    });
};
// const fetchTasteDive = (searchQuery, updater) => {
//   const apiKeyTasteDive = process.env.REACT_APP_TASTE_DIVE_API_KEY;
//   const proxyUrl = 'http://localhost:5000/api/';

//   axios
//     .get(`/api?q=${searchQuery}&info=1&k=${apiKeyTasteDive}`, {
//       params: {
//         hello: true,
//       },
//     })
//     .then((response) => {
//       console.log(response.Similar.Results);
//       updater(response.Similar.Results);
//     })
//     .catch((error) => {
//       console.log('parsing failed', error);
//     });
// };

export default fetchTasteDive;
