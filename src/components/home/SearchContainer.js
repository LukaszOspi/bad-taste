import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import useDebounce from '../../services/useDebounce';
import SearchOptionsList from './SearchOptionsList';
import './SearchContainer.css';
import loadingSpinner from '../../assets/loading.gif';
import fetchTMDB from '../../services/fetchTMDB';

const SearchBar = ({ dropdownSearchValue, setDropdownSearchValue }) => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleLoading = () => {
    if (!isLoading) {
      setIsLoading(true);
      setDisplay(false);
      setSearch('');
      setDropdownSearchValue({
        title: '',
        id: '',
      });
      setOptions([]);
    }
  };

  const resetOptions = () => {
    setOptions([]);
    setIsLoading(false);
    setDisplay(false);
    setDropdownSearchValue({
      title: '',
      id: '',
    });
  };

  useDebounce(
    async () => {
      if (search && dropdownSearchValue.title !== search) {
        try {
          await fetchTMDB(search, setOptions);
          setIsLoading(false);
          setDisplay(true);
        } catch (err) {
          console.error(`fetchTMDB() in useDebounce failed with error ${err}`);
        }
      }
    },
    [search],
    1500
  );

  useEffect(() => {
    if (!search) {
      resetOptions();
    }
    return () => {
      const source = axios.CancelToken.source();
      source.cancel('component got unmounted');
    };
  }, [search]);

  return (
    <div className="auto-container">
      <div className="flex-container flex-column pos-rel">
        <input
          placeholder="Type to search"
          value={search}
          onChange={(e) => {
            handleLoading();
            setSearch(e.target.value);
          }}
        />
        {isLoading && (
          <div className="loading-indicator">
            <img src={loadingSpinner} alt="loading" />
          </div>
        )}
        {display && (
          <div className="autoContainer">
            <SearchOptionsList
              options={options}
              setDropdownSearchValue={setDropdownSearchValue}
              setSearch={setSearch}
              setDisplay={setDisplay}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
