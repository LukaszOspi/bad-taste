import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import MediaContext from '../../context';
import StreamingProvidersList from './StreamingProvidersList';
import MovieInfo from './MovieInfo';
import TvShowInfo from './TvShowInfo';
import './CardDetails.css';
import '../../index.css';

const CardDetails = () => {
  const history = useHistory();
  const { appState } = useContext(MediaContext);

  const showList = () => {
    appState.mediaList.length === 0
      ? history.push('./card-list')
      : history.push('/card-page');
  };

  return (
    <div className="card-details">
      <div className="card-details-header">
        <button className="button back-button" onClick={showList}>
          Back to the list
        </button>
      </div>
      <div className="card-details-container">
        <br />
        {!appState.mediaDetails ? (
          <p>Error while trying to gather information about this content</p>
        ) : !appState.mediaDetails['episode_run_time'] ? (
          <MovieInfo />
        ) : (
          <TvShowInfo />
        )}

        {appState.streamingProvidersList === undefined ? (
          <p>This content is not availabe online in your region</p>
        ) : (
          <StreamingProvidersList />
        )}
      </div>
    </div>
  );
};

export default CardDetails;
