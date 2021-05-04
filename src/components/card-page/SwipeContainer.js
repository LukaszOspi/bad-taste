import { useHistory } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import MediaContext from '../../context';
import fetchStreamingProvidersTMDB from '../../services/fetch/fetchStreamingProvidersTMDB';
import fetchDetailsTMDB from '../../services/fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/fetch/fetchCreditsTMDB';
import fetchRecommendationsTMDB from '../../services/fetch/fetchRecommendationsTMDB';
import keyLegend from '../../services/keyLegend';
import './SwipeContainer.css';

const SwipeContainer = ({ dispatchSwipedMedia, swipedMedia }) => {
  const history = useHistory();
  const { appState, dispatchAppState } = useContext(MediaContext);

  const handleFetching = useCallback(
    async (mediaId, mediaType) => {
      dispatchAppState({
        type: 'fetch-details',
        payload: {
          credits: await fetchCreditsTMDB(mediaId, mediaType),
          details: await fetchDetailsTMDB(mediaId, mediaType),
          streaming: await fetchStreamingProvidersTMDB(mediaId, mediaType),
        },
      });
    },
    [dispatchAppState]
  );

  useEffect(() => {
    if (appState.mediaList.length !== 0) {
      handleFetching(
        appState.mediaList[appState.displayIndex].id,
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
      const newList = await fetchRecommendationsTMDB(mediaID, mediaType);
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
        <div className="card-page">
          {/* <button className="button" onClick={() => history.push('/card-list')}>
            SHOW YOUR {swipedMedia[appState.swipedListIndex].liked.length} LIKED
            TITLES
          </button> */}
          <h1 className="swipe-media-title">
            {
              appState.mediaList[appState.displayIndex][
                keyLegend[appState.mediaType]['title']
              ]
            }
          </h1>
          <div className="swipe-container">
            <div className="card-item">
              {/* <button
                className="like-button"
                onClick={() => {
                  dispatchSwipedMedia({
                    type: 'dislike',
                    payload: appState.mediaList[appState.displayIndex],
                    arrIndex: appState.swipedListIndex,
                    id: appState.dropdownSearchValue.id,
                    mediaType: appState.mediaType,
                    title: appState.dropdownSearchValue.title,
                  });
                  dispatchAppState({ type: 'increase-display-index' });
                }}
              >
                DISLIKE
                {' ' + swipedMedia[appState.swipedListIndex].disliked.length}
              </button> */}
              <img
                className="card-page-img"
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500${
                  appState.mediaList[appState.displayIndex][
                    keyLegend[appState.mediaType]['poster']
                  ]
                }`}
              />
              {/*  <button
                className="like-button"
                onClick={async () => {
                  dispatchSwipedMedia({
                    type: 'like',
                    payload: appState.mediaList[appState.displayIndex],
                    arrIndex: appState.swipedListIndex,
                    id: appState.dropdownSearchValue.id,
                    mediaType: appState.mediaType,
                    title: appState.dropdownSearchValue.title,
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
                {' ' + swipedMedia[appState.swipedListIndex].liked.length}
              </button> */}
            </div>
          </div>
          {/* <button
            className="button"
            onClick={() => history.push('/card-details')}
          >
            More info
          </button> */}
        </div>
      )}
      <div className="button-div">
        <img className="like-button" alt="dislike" src="" />
        <img className="like-button" alt="like" src="" />
        <button className="round-button">i</button>
        <button className="round-button">L</button>
        <button className="round-button">+</button>
      </div>
    </>
  );
};

export default SwipeContainer;
