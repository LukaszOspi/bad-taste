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
      <p>
        Tell me what you like and I'll tell you what to watch...
        <br />
        Pick your flavor first.
      </p>

      <div className="buttons-div">
        <button
          className="button movie-button"
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
          className="button tv-button"
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
            className="button list-button"
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
