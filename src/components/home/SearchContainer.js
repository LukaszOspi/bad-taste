import { useEffect, useContext } from 'react';
import axios from 'axios';
import useDebounce from '../../services/useDebounce';
import SearchOptionsList from './SearchOptionsList';
import './SearchContainer.css';
import loadingSpinner from '../../assets/loading.gif';
import fetchTMDB from '../../services/fetch/fetchTMDB';
import MediaContext from '../../context';
import '../../index.css';

const SearchBar = ({ search, setSearch }) => {
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
          placeholder="Type to search"
          value={search}
          onChange={(e) => {
            dispatchAppState({ type: 'loading' });
            setSearch(e.target.value);
          }}
        />
        {appState.isLoading && (
          <div className="loading-indicator">
            <img src={loadingSpinner} alt="loading" />
          </div>
        )}
        {appState.display && (
          <div className="autoContainer">
            <SearchOptionsList />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
