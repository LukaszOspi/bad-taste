import { useEffect } from 'react';
import Header from './Header';
import SwipeContainer from './SwipeContainer';
import fetchRecommendationsTMDB from '../../services/fetchRecommendationsTMDB ';

const CardPage = ({
  mediaList,
  setMediaList,
  dropdownSearchValue,
  displayIndex,
  setDisplayIndex,
  setStreamingProvidersList,
  setMediaDetails,
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
        displayIndex={displayIndex}
        setDisplayIndex={setDisplayIndex}
        setStreamingProvidersList={setStreamingProvidersList}
        setMediaDetails={setMediaDetails}
      />
    </div>
  );
};

export default CardPage;
