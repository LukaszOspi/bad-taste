import { useState, useContext } from 'react';
import CastList from './CastList';
import YoutubeModalPlayer from './YoutubeModalPlayer';
import '../../index.css';
import MediaContext from '../../context';

const MovieInfo = () => {
  const { appState } = useContext(MediaContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const mediaLength =
    appState.mediaDetails.runtime % 60 === 0
      ? `${appState.mediaDetails.runtime / 60}h`
      : `${parseInt(appState.mediaDetails.runtime / 60)}h ${
          appState.mediaDetails.runtime % 60
        }m`;

  const directorList = appState.mediaCredits.crew.filter(
    (c) => c.job === 'Director'
  );
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
        <h1 id="media-title">
          {appState.mediaDetails.title}{' '}
          {`(${appState.mediaDetails.release_date.slice(0, 4)})`}
        </h1>
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
              <YoutubeModalPlayer
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                youtubeKey={mediaTrailerList?.[0]?.['key']}
              />
            </div>
            <p className="genres">{`${appState.mediaDetails.release_date} - ${mediaLength}`}</p>
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
          <h4>{directorList.length > 1 ? 'Directors: ' : 'Director: '}</h4>
          <p id="director-name">
            {directorList.map((d, i) =>
              i === directorList.length - 1 ? `${d.name}.` : `${d.name}, `
            )}
          </p>
        </div>
        <CastList />
      </div>
    </>
  );
};

export default MovieInfo;
