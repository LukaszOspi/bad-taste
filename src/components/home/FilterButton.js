import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './FilterButton.css';
import MediaContext from '../../context';
import '../../index.css';

const FilterButton = ({ search, swipedMedia }) => {
  const { dispatchAppState } = useContext(MediaContext);
  const history = useHistory();

  return (
    <div className="filter-bar">
      <h1>BAD TASTE</h1>
      <p>Tell me what you like and I'll tell you what to watch...</p>

      <div className="buttons-div">
        <a
          href="#"
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
        </a>
        <a
          href="#"
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
        </a>
        {swipedMedia[0].id !== '' && (
          <a
            href="#"
            className="neon-list-button"
            onClick={() => history.push('/card-list')}
          >
            Your List
          </a>
        )}
      </div>
    </div>
  );
};

export default FilterButton;
