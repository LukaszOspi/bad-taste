import SearchOptions from './SearchOptions';
import './SearchOptionsList.css';
import { useHistory } from 'react-router-dom';
import React from 'react';

const SearchOptionsList = ({
  options,
  setDropdownSearchValue,
  setSearch,
  setDisplay,
}) => {
  const history = useHistory();
  const getTitleFromClick = (value, id) => {
    setDropdownSearchValue({ title: value, id });
    setSearch(value);
    setDisplay(false);
    history.push('/card-page');
  };

  return (
    <div className="search-options-List">
      {options &&
        options.map((option, index) => {
          return (
            <div
              onClick={() => getTitleFromClick(option.title, option.id)}
              key={index}
              tabIndex="0"
            >
              <SearchOptions
                poster={option.poster_path}
                title={option.title}
                year={option.release_date}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SearchOptionsList;
