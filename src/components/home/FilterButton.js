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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
        elementum egestas blandit. Proin augue lacus, phasellus vel lorem risus.
      </p>
      <div className="buttons-div">
        <button
          className="button blackButton"
          onClick={() =>
            dispatchAppState({
              type: 'change-media-type',
              payload: 'movie',
              loading: search ? true : false,
            })
          }
        >
          Movie
        </button>
        <button
          className="button blueButton"
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
            className="button yellowButton"
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
