import "../../index.css";

const StreamingProviders = ({ logo, name }) => {
  return (
    <div className="streaming-provider">
      <img
        className="streaming-icon"
        alt="streaming provider icon"
        src={`https://image.tmdb.org/t/p/w45/${logo}`}
      />
      <p className="streaming-name">{name}</p>
    </div>
  );
};

export default StreamingProviders;
