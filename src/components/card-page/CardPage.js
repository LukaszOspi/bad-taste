import { useEffect, useContext, useCallback } from 'react';
import SwipeContainer from './SwipeContainer';
import fetchRecommendationsTMDB from '../../services/fetch/fetchRecommendationsTMDB';
import MediaContext from '../../context';
import '../../index.css';
import './CardPage.css';

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
    if (appState.mediaList.length === 0) {
      handleFetch();
    }
  }, [appState, handleFetch]);

  return (
    <div className="card-page">
      <SwipeContainer
        dispatchSwipedMedia={dispatchSwipedMedia}
        swipedMedia={swipedMedia}
      />
    </div>
  );
};

export default CardPage;
