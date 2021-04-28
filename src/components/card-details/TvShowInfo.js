import { useState } from 'react';
import CastList from './CastList';
import SeasonList from './SeasonList';
import YoutubeModalPlayer from './YoutubeModalPlayer';

const MediaInfo = ({ mediaDetails, mediaCredits }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            {mediaDetails.original_name}{' '}
            {`(${mediaDetails.first_air_date.slice(0, 4)})`}
          </h3>
          <div className="media-rating-trailer">
            <h4>{`Rating: ${mediaDetails.vote_average} / 10`}</h4>
            <p className="media-status">{`Status: ${mediaDetails.status}`}</p>
            <YoutubeModalPlayer
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              youtubeKey={mediaTrailerList[0]['key']}
            />
          </div>
        </div>
        <p className="genres">{`First air date: ${
          mediaDetails.first_air_date
        } - episode duration: ${parseInt(
          mediaDetails.episode_run_time
        )} min.`}</p>
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
          <h4>Created by: </h4>
          <p id="director-name">
            {mediaDetails.created_by.map((d, i) =>
              i === mediaDetails.created_by.length - 1
                ? `${d.name}.`
                : `${d.name}, `
            )}
          </p>
        </div>
        <SeasonList mediaDetails={mediaDetails} />
        <CastList mediaCredits={mediaCredits} />
      </div>
    </>
  );
};

export default MediaInfo;
