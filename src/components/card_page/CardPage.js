import { useEffect } from 'react';
import Header from './Header';
import SwipeContainer from './SwipeContainer';
import fetchTasteDive from '../../services/fetchTasteDive';

const CardPage = (props) => {
  const {
    mediaList,
    setMediaList,
    mediaDetails,
    setMediaDetails,
    dropdownSearchValue,
  } = props;

  useEffect(() => {
    fetchTasteDive(dropdownSearchValue, setMediaList);
  }, [dropdownSearchValue]);

  return (
    <div className="card-page">
      <h1>test</h1>
      <Header />
      <SwipeContainer
        mediaList={mediaList}
        mediaDetails={mediaDetails}
        setMediaDetails={setMediaDetails}
      />
    </div>
  );
};

export default CardPage;
