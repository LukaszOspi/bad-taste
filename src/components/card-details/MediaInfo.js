const MediaInfo = ({ mediaDetails }) => {
  console.log(mediaDetails);
  const genresList = mediaDetails.genres.map((genre) => ` ${genre.name}`);
  const mediaLength =
    mediaDetails.runtime % 60 === 0
      ? `${mediaDetails.runtime / 60}h`
      : `${parseInt(mediaDetails.runtime / 60)}h ${mediaDetails.runtime % 60}m`;

  return (
    <div className="media-info">
      <h2>
        {mediaDetails.title} {`(${mediaDetails.release_date.slice(0, 4)})`}
      </h2>
      <p>{`${mediaDetails.release_date} - ${genresList} - ${mediaLength}`}</p>
      <p>{mediaDetails.tagline}</p>

      <img
        className="media-info-image"
        alt="media poster"
        src={`https://image.tmdb.org/t/p/w185${mediaDetails.poster_path}`}
      />
      <h3>Overview: </h3>
      <p>{mediaDetails.overview}</p>
      <h4>Director: </h4>
    </div>
  );
};

export default MediaInfo;
