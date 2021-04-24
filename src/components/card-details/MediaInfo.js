import { useState } from 'react';
import CastList from './CastList';
import YoutubeModalPlayer from './YoutubeModalPlayer';

const MediaInfo = ({ mediaDetails, mediaCredits }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const genresList = mediaDetails.genres.map((genre) => ` ${genre.name}`);
  const mediaLength =
    mediaDetails.runtime % 60 === 0
      ? `${mediaDetails.runtime / 60}h`
      : `${parseInt(mediaDetails.runtime / 60)}h ${mediaDetails.runtime % 60}m`;

  const directorList = mediaCredits.crew.filter((c) => c.job === 'Director');
  const mediaTrailerList = mediaDetails.videos.results.filter(
    (m) => m.type === 'Trailer'
  );

  return (
    <div className="media-info">
      <h2>
        {mediaDetails.title} {`(${mediaDetails.release_date.slice(0, 4)})`}
      </h2>
      <p>{`${mediaDetails.release_date} - ${genresList} - ${mediaLength}`}</p>
      <h3>{`Rating: ${mediaDetails.vote_average} / 10`}</h3>
      <p>{mediaDetails.tagline}</p>

      <img
        className="media-info-image"
        alt="media poster"
        src={`https://image.tmdb.org/t/p/w185${mediaDetails.poster_path}`}
      />
      <YoutubeModalPlayer
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        youtubeKey={mediaTrailerList[0]['key']}
      />
      <h3>Overview: </h3>
      <p>{mediaDetails.overview}</p>
      <h3>{directorList.length > 1 ? 'Directors: ' : 'Director: '}</h3>
      <p>
        {directorList.map((d, i) => {
          return i === directorList.length - 1 ? `${d.name}.` : `${d.name}, `;
        })}
      </p>
      <h3>Cast: </h3>
      <CastList mediaCredits={mediaCredits} />
    </div>
  );
};

export default MediaInfo;
