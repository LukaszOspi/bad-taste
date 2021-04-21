import { useHistory } from 'react-router-dom';

import StreamingProvidersList from './StreamingProvidersList';

const CardDetails = ({ streamingProvidersList }) => {
  const history = useHistory();

  const showList = () => {
    history.push('/card-page');
  };

  return (
    <div className="card-details">
      <button onClick={showList}>Back to the list</button>
      <h2>Additional details for this movie</h2>
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
