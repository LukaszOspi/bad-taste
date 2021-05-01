import { useState } from 'react';
import CastList from './CastList';
import YoutubeModalPlayer from './YoutubeModalPlayer';
import '../../index.css';

const MovieInfo = ({ mediaDetails, mediaCredits }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const mediaLength =
    mediaDetails.runtime % 60 === 0
      ? `${mediaDetails.runtime / 60}h`
      : `${parseInt(mediaDetails.runtime / 60)}h ${mediaDetails.runtime % 60}m`;

  const directorList = mediaCredits.crew.filter((c) => c.job === 'Director');
  const mediaTrailerList = mediaDetails.videos.results.filter(
    (m) => m.type === 'Trailer'
  );

  return (
    <>
      <img
        className="media-info-image"
        alt="backdrop"
        src={`https://image.tmdb.org/t/p/w780${mediaDetails.backdrop_path}`}
      />
      <div className="media-info">
        <div className="media-info-metadata">
          <h3 id="media-title">
            {mediaDetails.title} {`(${mediaDetails.release_date.slice(0, 4)})`}
          </h3>
          <div className="media-rating-trailer">
            <h4>{`Rating: ${mediaDetails.vote_average} / 10`}</h4>
            <YoutubeModalPlayer
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              youtubeKey={mediaTrailerList[0]['key']}
            />
          </div>
        </div>
        <p className="genres">{`${mediaDetails.release_date} - ${mediaLength}`}</p>
        <p className="genres">
          {mediaDetails.genres.map((g, i) =>
            i === mediaDetails.genres.length - 1 ? `${g.name}.` : `${g.name}, `
          )}
        </p>
        <div id="media-overview-section">
          <p className="tagline">{mediaDetails.tagline}</p>
          <h4>Overview: </h4>
          <p id="overview">{mediaDetails.overview}</p>
        </div>
        <div id="director">
          <h4>{directorList.length > 1 ? 'Directors: ' : 'Director: '}</h4>
          <p id="director-name">
            {directorList.map((d, i) =>
              i === directorList.length - 1 ? `${d.name}.` : `${d.name}, `
            )}
          </p>
        </div>
        <CastList mediaCredits={mediaCredits} />
      </div>
    </>
  );
};

export default MovieInfo;
