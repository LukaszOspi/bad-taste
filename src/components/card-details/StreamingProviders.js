const StreamingProviders = (props) => {
  return (
    <div className="streaming-provider">
      <img
        className="streaming-icon"
        alt="streaming provider icon"
        src={`https://image.tmdb.org/t/p/w45/${props.logo}`}
      />
      <p className="streaming-name">{props.name}</p>
    </div>
  );
};

export default StreamingProviders;
