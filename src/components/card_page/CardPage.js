import { useEffect } from 'react';
import Header from './Header';
import SwipeContainer from './SwipeContainer';
import fetchRecommendationsTMDB from '../../services/fetchRecommendationsTMDB ';

const CardPage = ({ mediaList, setMediaList, dropdownSearchValue }) => {
  useEffect(() => {
    fetchRecommendationsTMDB(dropdownSearchValue.id, setMediaList);
  }, [dropdownSearchValue]);

  return (
    <div className="card-page">
      <h3>You should give this a look</h3>
      <Header />
      <SwipeContainer mediaList={mediaList} />
    </div>
  );
};

export default CardPage;
