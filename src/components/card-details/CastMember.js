import '../../index.css';

const CastMember = ({
  castPicture,
  name,
  character,
  index,
  dispatch,
  filteredCastList,
}) => {
  return (
    <div className="cast-member">
      <div className="cast-header">
        {index === 0 ? (
          <button className="arrow-button" disabled>{`<`}</button>
        ) : (
          <button
            className="arrow-button"
            onClick={() => dispatch({ type: 'decrement' })}
          >{`<`}</button>
        )}
        <img
          className="cast-picture"
          alt="actor"
          src={`https://image.tmdb.org/t/p/w185${castPicture}`}
        />
        {index === filteredCastList.length - 1 ? (
          <button className="arrow-button" disabled>{`<`}</button>
        ) : (
          <button
            className="arrow-button"
            onClick={() => dispatch({ type: 'increment' })}
          >{`>`}</button>
        )}
      </div>
      <div className="cast-details">
        <h4 className="cast-name">{name}</h4>
        <p className="cast-character">{character}</p>
      </div>
    </div>
  );
};

export default CastMember;
