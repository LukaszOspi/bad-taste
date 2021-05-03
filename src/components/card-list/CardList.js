import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MediaList from './MediaList';
import './Media.css';
import '../../index.css';
import MediaContext from '../../context';

const CardList = ({ swipedMedia, dispatchSwipedMedia }) => {
  const { appState } = useContext(MediaContext);
  const history = useHistory();

  const backCardPage = () => {
    appState.mediaList.length === 0
      ? history.push('/')
      : history.push('/card-page');
  };

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
        {swipedMedia.map((e, i) => {
          return (
            <div>
              <h4>{e.mediaTitle}</h4>
              <MediaList
                likedMedia={e}
                dispatchSwipedMedia={dispatchSwipedMedia}
                arrIndex={i}
                mediaType={e.type}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
