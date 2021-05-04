import { useHistory } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import MediaContext from '../../context';
import fetchStreamingProvidersTMDB from '../../services/fetch/fetchStreamingProvidersTMDB';
import fetchDetailsTMDB from '../../services/fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/fetch/fetchCreditsTMDB';
import fetchRecommendationsTMDB from '../../services/fetch/fetchRecommendationsTMDB';
import keyLegend from '../../services/keyLegend';
import './SwipeContainer.css';
import thumbDown from '../../assets/thumb-down.png';
import thumbUp from '../../assets/thumb-up.png';
import bubble from '../../assets/yellow-bubble.png';
import list from '../../assets/list-1.png';
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
            GO TO THE LIST
          </button> */}

          <div className="swipe-container">
            <div className="card-item">
              <div className="desktop-button">
                <img
                  className="desktop-like-button"
                  alt="dislike"
                  src={thumbDown}
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
                />
              </div>
              <div className="card-page-img">
                <img
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/w500${
                    appState.mediaList[appState.displayIndex][
                      keyLegend[appState.mediaType]['poster']
                    ]
                  }`}
                />
              </div>
              <div className="desktop-button">
                <img
                  className="desktop-like-button"
                  alt="like"
                  src={thumbUp}
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
                />
              </div>
            </div>
          </div>
          {/* <button
            className="button"
            onClick={() => history.push('/card-details')}
          >
            More info
          </button> */}

          <div className="button-div">
            <div className="mobile-button">
              <img
                className="mobile-like-button"
                alt="dislike"
                src={thumbDown}
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
              />
            </div>
            <div className="buttons-div">
            <img 
            className="mobile-like-button"
            alt="info"
            src={bubble}
            onClick={() => history.push('/card-details')}
            />
            <img 
            className="mobile-like-button"
            alt="list"
            src={list}
            onClick={() => history.push('/card-list')}
            />
            </div>
            <div className="mobile-button">
              <img
                className="mobile-like-button"
                alt="like"
                src={thumbUp}
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
              />
            </div>
          </div>

          <h1 className="swipe-media-title">
            {
              appState.mediaList[appState.displayIndex][
                keyLegend[appState.mediaType]['title']
              ]
            }
          </h1>
        </div>
      )}
    </>
  );
};

export default SwipeContainer;
