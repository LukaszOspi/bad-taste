const SearchOptions = ({ poster, title, year }) => {
  return (
    <div className="search-options">
      <img
        className="poster"
        alt="poster"
        src={`https://image.tmdb.org/t/p/w92${poster}`}
      />
      <div className="search-details">
        <h1 className="search-title">{title}</h1>
        <p className="search-year">{year.slice(0, 4)}</p>
      </div>
    </div>
  );
};

export default SearchOptions;
