import SearchOptions from './SearchOptions';
import './SearchOptionsList.css';
import { useHistory, withRouter } from 'react-router-dom';
import React from 'react';
import ButtonRedirect from './ButtonRedirect';

const SearchOptionsList = (props) => {
  const { options, setDropdownSearchValue, setSearch, setDisplay } = props;
  const history = useHistory();
  const getTitleFromClick = (value) => {
    setDropdownSearchValue(value);
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
              onClick={() => getTitleFromClick(option.Title)}
              key={index}
              tabIndex="0"
            >
              <SearchOptions
                Poster={option.Poster}
                Title={option.Title}
                Year={option.Year}
                Type={option.Type}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SearchOptionsList;
