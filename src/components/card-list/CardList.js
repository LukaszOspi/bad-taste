import React from 'react';
import MediaList from './MediaList';
import './Media.css';
import { useHistory } from 'react-router-dom';
import '../../index.css';

const CardList = ({ swipedMedia, dispatchSwipedMedia }) => {
  const history = useHistory();

  const backCardPage = () => {
    history.push('/card-page');
  };
  console.log(swipedMedia.liked.length);

  return (
    <>
      <div>
        <button
          className="return-button"
          idName="button"
          onClick={backCardPage}
        >
          RETURN
        </button>
      </div>
      <div className="card-list">
        <MediaList
          swipedMedia={swipedMedia}
          dispatchSwipedMedia={dispatchSwipedMedia}
        />
      </div>
    </>
  );
};

export default CardList;
