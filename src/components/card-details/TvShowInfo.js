import { useState, useContext } from 'react';
import CastList from './CastList';
import SeasonList from './SeasonList';
import YoutubeModalPlayer from './YoutubeModalPlayer';
import '../../index.css';
import MediaContext from '../../context';

const MediaInfo = () => {
  const { appState } = useContext(MediaContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const mediaTrailerList = appState.mediaDetails.videos.results.filter(
    (m) => m.type === 'Trailer'
  );

  return (
    <>
      <img
        className="media-info-image"
        alt="backdrop"
        src={`https://image.tmdb.org/t/p/w780${appState.mediaDetails.backdrop_path}`}
      />
      <div className="media-info">
        <h3 id="media-title">
          {appState.mediaDetails.original_name}{' '}
          {`(${appState.mediaDetails.first_air_date.slice(0, 4)})`}
        </h3>
        <div className="media-info-header">
          <div className="media-detail-poster">
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w300${appState.mediaDetails.poster_path}`}
            />
          </div>
          <div className="media-info-metadata">
            <div className="media-rating-trailer">
              <h4>{`Rating: ${appState.mediaDetails.vote_average} / 10`}</h4>
              <p className="media-status">{`Status: ${appState.mediaDetails.status}`}</p>
              <YoutubeModalPlayer
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                youtubeKey={mediaTrailerList[0]['key']}
              />
            </div>
            <p className="genres">{`First air date: ${appState.mediaDetails.first_air_date}`}</p>
            <p>{`Episode duration: ${parseInt(
              appState.mediaDetails.episode_run_time
            )} min.`}</p>
            <p className="genres">
              {appState.mediaDetails.genres.map((g, i) =>
                i === appState.mediaDetails.genres.length - 1
                  ? `${g.name}.`
                  : `${g.name}, `
              )}
            </p>
            <p className="tagline">{appState.mediaDetails.tagline}</p>
          </div>
        </div>
        <div id="media-overview-section">
          <h4>Overview: </h4>
          <p id="overview">{appState.mediaDetails.overview}</p>
        </div>
        <div id="director">
          <h4>Created by: </h4>
          <p id="director-name">
            {appState.mediaDetails.created_by.map((d, i) =>
              i === appState.mediaDetails.created_by.length - 1
                ? `${d.name}.`
                : `${d.name}, `
            )}
          </p>
        </div>
        <SeasonList />
        <CastList />
      </div>
    </>
  );
};

export default MediaInfo;
