import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './FilterButton.css';
import MediaContext from '../../context';

const FilterButton = ({ search, swipedMedia }) => {
  const { dispatchAppState } = useContext(MediaContext);
  const history = useHistory();

  return (
    <div className="filter-bar">
      <h1>BAD TASTE</h1>
      <p>Tell me what you like and I'll tell you what to watch...</p>

      <div className="buttons-div">
        <button
          className="neon-movie-button"
          onClick={() =>
            dispatchAppState({
              type: 'change-media-type',
              payload: 'movie',
              loading: search ? true : false,
            })
          }
        >
          Movies
        </button>
        <button
          className="neon-tv-button"
          onClick={() =>
            dispatchAppState({
              type: 'change-media-type',
              payload: 'tv',
              loading: search ? true : false,
            })
          }
        >
          Tv Shows
        </button>
        {swipedMedia[0].id !== '' && (
          <button
            className="neon-list-button"
            onClick={() => history.push('/card-list')}
          >
            Your List
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterButton;
