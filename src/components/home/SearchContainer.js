import { useEffect, useContext } from 'react';
import axios from 'axios';
import useDebounce from '../../services/useDebounce';
import SearchOptionsList from './SearchOptionsList';
import './SearchContainer.css';
import loadingSpinner from '../../assets/Eye (slow).gif';
import fetchTMDB from '../../services/fetch/fetchTMDB';
import MediaContext from '../../context';
import '../../index.css';

const SearchBar = ({ search, setSearch, swipedMedia, dispatchSwipedMedia }) => {
  const { appState, dispatchAppState } = useContext(MediaContext);

  useDebounce(
    async () => {
      if (search && appState.dropdownSearchValue.title !== search) {
        try {
          await dispatchAppState({
            type: 'fetch-dropdown-options',
            payload: await fetchTMDB(search, appState.mediaType),
          });
        } catch (err) {
          console.error(`fetchTMDB() in useDebounce failed with error ${err}`);
        }
      }
    },
    [search],
    1000
  );

  useEffect(() => {
    if (!search) {
      dispatchAppState({ type: 'reset-options' });
    }
    return () => {
      const source = axios.CancelToken.source();
      source.cancel('component got unmounted');
    };
  }, [dispatchAppState, search]);

  return (
    <div className="auto-container">
      <div className="flex-container flex-column pos-rel">
        <input
          disabled={appState.mediaType ? false : true}
          placeholder={
            appState.mediaType
              ? 'now Sprinkle your bad taste on top'
              : 'first select movies or tv shows'
          }
          value={search}
          onChange={(e) => {
            dispatchAppState({ type: 'loading' });
            setSearch(e.target.value);
          }}
        />
        {appState.isLoading && (
          <div className="loading-indicator-div">
            <img
              className="loading-indicator"
              src={loadingSpinner}
              alt="loading"
              height="auto"
              width="150"
            />
          </div>
        )}
        {appState.display && (
          <div className="autoContainer">
            <SearchOptionsList
              swipedMedia={swipedMedia}
              dispatchSwipedMedia={dispatchSwipedMedia}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
