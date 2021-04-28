import { useHistory } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import MediaContext from '../../context';
import fetchStreamingProvidersTMDB from '../../services/movie-fetch/fetchStreamingProvidersTMDB';
import fetchDetailsTMDB from '../../services/movie-fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/movie-fetch/fetchCreditsTMDB';
import fetchRecommendationsTMDB from '../../services/movie-fetch/fetchRecommendationsTMDB';
import keyLegend from '../../services/keyLegend';

const SwipeContainer = ({
  mediaList,
  setMediaList,
  displayIndex,
  setDisplayIndex,
  setStreamingProvidersList,
  setMediaDetails,
  setMediaCredits,
  dispatchSwipedMedia,
  swipedMedia,
}) => {
  const history = useHistory();
  const { mediaType } = useContext(MediaContext);

  const handleFetching = useCallback(() => {
    fetchStreamingProvidersTMDB(
      mediaList[displayIndex].id,
      setStreamingProvidersList
    );
    fetchDetailsTMDB(mediaList[displayIndex].id, setMediaDetails);
    fetchCreditsTMDB(mediaList[displayIndex].id, setMediaCredits);
  }, [
    mediaList,
    displayIndex,
    setStreamingProvidersList,
    setMediaDetails,
    setMediaCredits,
  ]);

  useEffect(() => {
    if (mediaList.length !== 0) {
      handleFetching();
    }
  }, [mediaList, displayIndex, handleFetching]);

  const showInfo = () => {
    setTimeout(() => {
      history.push('/card-details');
    }, 150);
  };

  const fetchNewRecommendations = async (mediaID, currentList) => {
    try {
      const newList = await fetchRecommendationsTMDB(mediaID);
      const filteredNewList = newList.filter(
        (e) => !currentList.find((d) => e.id === d.id)
      );
      return filteredNewList;
    } catch (err) {
      console.error(
        `fetchRecommendationsTMDB() in fetchNewRecommendations failed with error ${err}`
      );
    }
  };
  console.log(swipedMedia.liked.length);

  return (
    <>
      {mediaList.length === 0 ? null : (
        <div className="swipe-container">
          <div className="card-item">
            <button onClick={() => history.push('/card-list')}>
              SHOW YOUR {swipedMedia.liked.length} LIKED TITLES
            </button>
            <h1>{mediaList[displayIndex][keyLegend[mediaType]['title']]}</h1>
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w500${
                mediaList[displayIndex][keyLegend[mediaType]['poster']]
              }`}
            />
            <div className="action-buttons">
              <button
                onClick={() => {
                  dispatchSwipedMedia({
                    type: 'dislike',
                    payload: mediaList[displayIndex],
                  });
                  setDisplayIndex(displayIndex + 1);
                }}
              >
                Dislike
              </button>
              <button onClick={showInfo}>More info</button>
              <button
                onClick={async () => {
                  dispatchSwipedMedia({
                    type: 'like',
                    payload: mediaList[displayIndex],
                  });
                  setMediaList([
                    ...mediaList,
                    ...(await fetchNewRecommendations(
                      mediaList[displayIndex].id,
                      mediaList
                    )),
                  ]);
                  setDisplayIndex(displayIndex + 1);
                }}
              >
                Like
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SwipeContainer;