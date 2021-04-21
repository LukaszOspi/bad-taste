import './SearchOptions.css';

const SearchOptions = (props) => {
  return (
    <div className="search-options">
      <img
        className="poster"
        alt="poster"
        src={`https://image.tmdb.org/t/p/w92${props.poster}`}
      />
      <div className="search-details">
        <h3 className="search-title">{props.title}</h3>
        <p className="search-year">{props.year}</p>
      </div>
    </div>
  );
};

export default SearchOptions;
