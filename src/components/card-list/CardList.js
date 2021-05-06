import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MediaList from './MediaList';
import './Media.css';
import './CardList.css';
import '../../index.css';
import MediaContext from '../../context';
import smiley from '../../assets/dead-smiley.png'

const CardList = ({ swipedMedia, dispatchSwipedMedia }) => {
  const { appState } = useContext(MediaContext);
  const history = useHistory();

  const backCardPage = () => {
    appState.mediaList.length === 0
      ? history.push('/')
      : history.push('/card-page');
  };

  return (
    <div className="card-list-page">
      <div className="nav-button-div">
        <button className="button nav-button" onClick={backCardPage}>
          RETURN
        </button>
        <button
          className="button nav-button"
          onClick={() => {
            localStorage.removeItem('swipedMedia');
            history.push('/');
            window.location.reload();
          }}
        >
          NUKE
        </button>
      </div>
      {swipedMedia[0].id !== '' && (
        <div className="card-list">
          {swipedMedia.map((e, i) => {
            return (
              <div key={e.id}>
                <div className="list-header">
                  <h4>{e.mediaTitle}</h4>
                  <img
                    className="button delete-list-button"
                    src={smiley}
                    alt="dead smiley face"
                    onClick={() =>
                      swipedMedia.length === 1
                        ? dispatchSwipedMedia({ type: 'initialize' })
                        : dispatchSwipedMedia({
                            type: 'remove-list',
                            arrIndex: i,
                          })
                    }
                  />
                </div>
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
      )}
    </div>
  );
};

export default CardList;
