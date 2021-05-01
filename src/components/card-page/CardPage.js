import { useEffect, useContext, useCallback } from 'react';
import Header from './Header';
import SwipeContainer from './SwipeContainer';
import fetchRecommendationsTMDB from '../../services/fetch/fetchRecommendationsTMDB';
import MediaContext from '../../context';
import '../../index.css';

const CardPage = ({ dispatchSwipedMedia, swipedMedia }) => {
  const { appState, dispatchAppState } = useContext(MediaContext);

  const handleFetch = useCallback(async () => {
    dispatchAppState({
      type: 'fetch-media-list',
      payload: await fetchRecommendationsTMDB(
        appState.dropdownSearchValue.id,
        appState.mediaType
      ),
    });
  }, [appState, dispatchAppState]);

  useEffect(() => {
    console.log(appState);
    if (appState.mediaList.length === 0) {
      handleFetch();
    }
  }, [appState, handleFetch]);

  return (
    <div className="card-page">
      <h3>You should give this a look</h3>
      <Header />
      <SwipeContainer
        dispatchSwipedMedia={dispatchSwipedMedia}
        swipedMedia={swipedMedia}
      />
    </div>
  );
};

export default CardPage;
