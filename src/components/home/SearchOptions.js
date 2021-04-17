import './SearchOptions.css';

const SearchOptions = (props) => {
  return (
    <div className="search-options">
      <img alt="poster" src={props.Poster} />
      <div className="search-details">
        <h3 className="search-title">{props.Title}</h3>
        <p className="search-year">{props.Year}</p>
        <p className="search-type">{props.Type}</p>
      </div>
    </div>
  );
};

export default SearchOptions;
