import { useEffect, useState } from 'react';
import axios from 'axios';
import useDebounce from '../services/useDebounce';
import SearchOptionsList from './SearchOptionsList';
import './SearchContainer.css';
import loadingSpinner from '../assets/loading.gif';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [dropdownSearchValue, setDropdownSearchValue] = useState('');
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(false);

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

  const fetchMovies = () => {
    const source = axios.CancelToken.source();
    const apiKey = 'aa82963a';

    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`, {
        cancelToken: source.token,
      })
      .then((res) => res.data)
      .then((data) => setOptions(data.Search))
      .then(setIsLoading(false))
      .then(setDisplay(true))
      .catch((err) => {
        console.error('Catched error: ' + err.message);
      });
  };

  useDebounce(
    () => {
      if (search && dropdownSearchValue !== search) {
        fetchMovies();
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
