import { useEffect } from 'react';
import Header from './Header';
import SwipeContainer from './SwipeContainer';
import fetchRecommendationsTMDB from '../../services/movieFetch/fetchRecommendationsTMDB ';

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
}) => {
  useEffect(() => {
    fetchRecommendationsTMDB(dropdownSearchValue.id, setMediaList);
  }, [dropdownSearchValue]);

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
      />
    </div>
  );
};

export default CardPage;
