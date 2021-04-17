import SearchOptions from './SearchOptions';
import './SearchOptionsList.css';

const SearchOptionsList = (props) => {
  const { options, setDropdownSearchValue, setSearch, setDisplay } = props;
  const getTitleFromClick = (value) => {
    setDropdownSearchValue(value);
    setSearch(value);
    setDisplay(false);
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
