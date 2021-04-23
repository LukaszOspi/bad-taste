const CastMember = ({ castPicture, name, character }) => {
  return (
    <div className="cast-member">
      <img
        className="cast-picture"
        alt="actor"
        src={`https://image.tmdb.org/t/p/w45${castPicture}`}
      />
      <div className="cast-details">
        <h3 className="cast-name">{name}</h3>
        <p className="cast-character">{character}</p>
      </div>
    </div>
  );
};

export default CastMember;
