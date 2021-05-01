import { useEffect, useContext } from 'react';
import Header from './Header';
import SwipeContainer from './SwipeContainer';
import fetchRecommendationsTMDB from '../../services/movie-fetch/fetchRecommendationsTMDB';
import MediaContext from '../../context';
import '../../index.css';
import { useCallback } from 'react';

const CardPage = ({
  mediaList,
  setMediaList,
  dropdownSearchValue,
  displayIndex,
  setDisplayIndex,
  setStreamingProvidersList,
  setMediaDetails,
  setMediaCredits,
  dispatchSwipedMedia,
  swipedMedia,
}) => {
  const { mediaType } = useContext(MediaContext);

  const handleFetch = useCallback(() => {
    fetchRecommendationsTMDB(dropdownSearchValue.id, setMediaList, mediaType);
  }, [dropdownSearchValue, mediaType, setMediaList]);

  useEffect(() => {
    if (mediaList.length === 0) {
      handleFetch();
    }
  }, [handleFetch, mediaList]);

  return (
    <div className="card-page">
      <h3>You should give this a look</h3>
      <Header />
      <SwipeContainer
        mediaList={mediaList}
        setMediaList={setMediaList}
        displayIndex={displayIndex}
        setDisplayIndex={setDisplayIndex}
        setStreamingProvidersList={setStreamingProvidersList}
        setMediaDetails={setMediaDetails}
        setMediaCredits={setMediaCredits}
        dispatchSwipedMedia={dispatchSwipedMedia}
        swipedMedia={swipedMedia}
      />
    </div>
  );
};

export default CardPage;
