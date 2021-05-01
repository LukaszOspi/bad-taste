import { useHistory } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import MediaContext from '../../context';
import fetchStreamingProvidersTMDB from '../../services/movie-fetch/fetchStreamingProvidersTMDB';
import fetchDetailsTMDB from '../../services/movie-fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/movie-fetch/fetchCreditsTMDB';
import fetchRecommendationsTMDB from '../../services/movie-fetch/fetchRecommendationsTMDB';
import keyLegend from '../../services/keyLegend';
// import "../../index.css";
import './SwipeContainer.css';

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
      setStreamingProvidersList,
      mediaType
    );
    fetchDetailsTMDB(mediaList[displayIndex].id, setMediaDetails, mediaType);
    fetchCreditsTMDB(mediaList[displayIndex].id, setMediaCredits, mediaType);
  }, [
    mediaList,
    displayIndex,
    setStreamingProvidersList,
    setMediaDetails,
    setMediaCredits,
    mediaType,
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
      const newList = await fetchRecommendationsTMDB(
        mediaID,
        undefined,
        mediaType
      );
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

  return (
    <>
      {mediaList.length === 0 ? null : (
        <>
          <button className="button" onClick={() => history.push('/card-list')}>
            SHOW YOUR {swipedMedia.liked.length} LIKED TITLES
          </button>
          <h1>{mediaList[displayIndex][keyLegend[mediaType]['title']]}</h1>
          <div className="swipe-container">
            <div className="card-item">
              <button
                className="like-button"
                onClick={() => {
                  dispatchSwipedMedia({
                    type: 'dislike',
                    payload: mediaList[displayIndex],
                  });
                  setDisplayIndex(displayIndex + 1);
                }}
              >
                DISLIKE
                {' ' + swipedMedia.disliked.length}
              </button>
              <img
                className="card-page-img"
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500${
                  mediaList[displayIndex][keyLegend[mediaType]['poster']]
                }`}
              />
              <button
                className="like-button"
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
                LIKE
                {' ' + swipedMedia.liked.length}
              </button>
            </div>
          </div>
          <button className="button" onClick={showInfo}>
            More info
          </button>
        </>
      )}
    </>
  );
};

export default SwipeContainer;
