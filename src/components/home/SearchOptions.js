import "../../css/home.css";

const SearchOptions = ({ poster, title, year }) => {
  return (
    <div className="search-options">
      <img
        className="poster"
        alt="poster"
        src={`https://image.tmdb.org/t/p/w92${poster}`}
      />
      <div className="search-details">
        <h3 className="search-title">{title}</h3>
        <p className="search-year">{year}</p>
      </div>
    </div>
  );
};

export default SearchOptions;
