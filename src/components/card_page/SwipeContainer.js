import { useHistory } from 'react-router-dom';

const SwipeContainer = ({ mediaList, displayIndex, setDisplayIndex }) => {
  const dislikedMedia = [];
  const likedMedia = [];
  const history = useHistory();

  console.log(mediaList);

  const handleLike = (e) => {
    if (e.target.value === 'Dislike') {
      dislikedMedia.push(mediaList[displayIndex]);
    }
    likedMedia.push(mediaList[displayIndex]);
    setDisplayIndex(displayIndex + 1);
  };

  const showInfo = () => {
    history.push('/card-details');
  };

  return (
    <>
      {mediaList.length === 0 ? null : (
        <div className="swipe-container">
          <div className="card-item">
            <h1>{mediaList[displayIndex].title}</h1>
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w500${mediaList[displayIndex].poster_path}`}
            />
            <div className="action-buttons">
              <button onClick={handleLike}>Dislike</button>
              <button onClick={showInfo}>More info</button>
              <button onClick={handleLike}>Like</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SwipeContainer;
