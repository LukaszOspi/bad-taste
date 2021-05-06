import { useHistory } from 'react-router-dom';
import { useEffect, useContext, useCallback } from 'react';
import MediaContext from '../../context';
import fetchStreamingProvidersTMDB from '../../services/fetch/fetchStreamingProvidersTMDB';
import fetchDetailsTMDB from '../../services/fetch/fetchDetailsTMDB';
import fetchCreditsTMDB from '../../services/fetch/fetchCreditsTMDB';
import fetchRecommendationsTMDB from '../../services/fetch/fetchRecommendationsTMDB';
import keyLegend from '../../services/keyLegend';
import LikeButton from './LikeButton';
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
              <LikeButton
                action="dislike"
                type="desktop"
                image={thumbDown}
                dispatchSwipedMedia={dispatchSwipedMedia}
                fetchNewRecommendations={fetchNewRecommendations}
              />
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
              <LikeButton
                action="like"
                type="desktop"
                image={thumbUp}
                dispatchSwipedMedia={dispatchSwipedMedia}
                fetchNewRecommendations={fetchNewRecommendations}
              />
            </div>
          </div>
          <div className="swipe-button-div">
            <LikeButton
              action="dislike"
              type="mobile"
              image={thumbDown}
              dispatchSwipedMedia={dispatchSwipedMedia}
              fetchNewRecommendations={fetchNewRecommendations}
            />
            <div className="info-button-div">
              <img
                className="mobile-like-button"
                alt="info"
                src={bubble}
                onClick={() => history.push('/card-details')}
              />
            </div>
            <div className="swipe-media-desktop-title-div">
              <h1 className="swipe-media-desktop-title">
                {
                  appState.mediaList[appState.displayIndex][
                    keyLegend[appState.mediaType]['title']
                  ]
                }
              </h1>
            </div>
            <div className="info-button-div">
              <img
                className="mobile-like-button"
                alt="list"
                src={list}
                onClick={() => history.push('/card-list')}
              />
            </div>
            <LikeButton
              action="like"
              type="mobile"
              image={thumbUp}
              dispatchSwipedMedia={dispatchSwipedMedia}
              fetchNewRecommendations={fetchNewRecommendations}
            />
          </div>
          <div className="swipe-media-mobile-title-div">
            <h1 className="swipe-media-mobile-title">
              {
                appState.mediaList[appState.displayIndex][
                  keyLegend[appState.mediaType]['title']
                ]
              }
            </h1>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default SwipeContainer;
