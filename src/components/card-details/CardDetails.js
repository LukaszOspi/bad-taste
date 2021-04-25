import { useHistory } from 'react-router-dom';
import StreamingProvidersList from './StreamingProvidersList';
import MediaInfo from './MediaInfo';
import './CardDetails.css';

const CardDetails = ({
  streamingProvidersList,
  mediaDetails,
  mediaCredits,
}) => {
  const history = useHistory();

  const showList = () => {
    history.push('/card-page');
  };

  return (
    <div className="card-details">
      <button onClick={showList}>Back to the list</button>
      <br />
      <br />
      {!mediaDetails ? (
        <p>Error while trying to gather information about this content</p>
      ) : (
        <MediaInfo mediaDetails={mediaDetails} mediaCredits={mediaCredits} />
      )}
      {streamingProvidersList === undefined ? (
        <p>This content is not availabe online in your region</p>
      ) : (
        <StreamingProvidersList
          streamingProvidersList={streamingProvidersList}
        />
      )}
    </div>
  );
};

export default CardDetails;
