import { useHistory } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import MediaContext from '../../context';
import fetchStreamingProvidersTMDB from '../../services/movie-fetch/fetchStreamingProvidersTMDB';
import fetchDetailsTMDB from '../../services/movie-fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/movie-fetch/fetchCreditsTMDB';
import fetchRecommendationsTMDB from '../../services/movie-fetch/fetchRecommendationsTMDB';
import keyLegend from '../../services/keyLegend';
import './SwipeContainer.css';

const SwipeContainer = ({ dispatchSwipedMedia, swipedMedia }) => {
  const history = useHistory();
  const { appState, dispatchAppState } = useContext(MediaContext);

  const handleFetching = useCallback(
    async (mediaId, updater, mediaType) => {
      dispatchAppState({
        type: 'fetch-details',
        payload: {
          credits: await fetchCreditsTMDB(mediaId, updater, mediaType),
          details: await fetchDetailsTMDB(mediaId, updater, mediaType),
          streaming: await fetchStreamingProvidersTMDB(
            mediaId,
            updater,
            mediaType
          ),
        },
      });
    },
    [dispatchAppState]
  );

  useEffect(() => {
    if (appState.mediaList.length !== 0) {
      handleFetching(
        appState.mediaList[appState.displayIndex].id,
        undefined,
        appState.mediaType
      );
    }
  }, [
    appState.displayIndex,
    appState.mediaList,
    appState.mediaType,
    handleFetching,
  ]);

  const fetchNewRecommendations = async (mediaID, mediaType, currentList) => {
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
      {appState.mediaList.length === 0 ? null : (
        <>
          <button className="button" onClick={() => history.push('/card-list')}>
            SHOW YOUR {swipedMedia.liked.length} LIKED TITLES
          </button>
          <h1>
            {
              appState.mediaList[appState.displayIndex][
                keyLegend[appState.mediaType]['title']
              ]
            }
          </h1>
          <div className="swipe-container">
            <div className="card-item">
              <button
                className="like-button"
                onClick={() => {
                  dispatchSwipedMedia({
                    type: 'dislike',
                    payload: appState.mediaList[appState.displayIndex],
                  });
                  dispatchAppState({ type: 'increase-display-index' });
                }}
              >
                DISLIKE
                {' ' + swipedMedia.disliked.length}
              </button>
              <img
                className="card-page-img"
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500${
                  appState.mediaList[appState.displayIndex][
                    keyLegend[appState.mediaType]['poster']
                  ]
                }`}
              />
              <button
                className="like-button"
                onClick={async () => {
                  dispatchSwipedMedia({
                    type: 'like',
                    payload: appState.mediaList[appState.displayIndex],
                  });
                  dispatchAppState({
                    type: 'update-media-list',
                    payload: await fetchNewRecommendations(
                      appState.mediaList[appState.displayIndex].id,
                      appState.mediaType,
                      appState.mediaList
                    ),
                  });
                }}
              >
                LIKE
                {' ' + swipedMedia.liked.length}
              </button>
            </div>
          </div>
          <button
            className="button"
            onClick={() => history.push('/card-details')}
          >
            More info
          </button>
        </>
      )}
    </>
  );
};

export default SwipeContainer;
