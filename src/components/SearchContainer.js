import { useEffect, useState } from 'react';
import axios from 'axios';
import useDebounce from '../services/useDebounce';
import SearchOptionsList from './SearchOptionsList';
import './SearchContainer.css';
import loadingSpinner from '../assets/loading.gif';
import fetchOMDB from '../services/fetchOMDB';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');
  const [dropdownSearchValue, setDropdownSearchValue] = useState('');
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const { setMediaList } = props;

  const handleLoading = () => {
    if (!isLoading) {
      setIsLoading(true);
      setDisplay(false);
      setDropdownSearchValue('');
    }
  };

  const resetOptions = () => {
    setOptions([]);
    setIsLoading(false);
    setDisplay(false);
    setDropdownSearchValue('');
  };

  useDebounce(
    () => {
      if (search && dropdownSearchValue !== search) {
        const promise = new Promise((resolve, reject) => {
          fetchOMDB(search, setOptions);
          resolve();
          reject();
        });

        promise.then(() => {
          setIsLoading(false);
          setDisplay(true);
        });
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
      <div className="search-button-container">
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
