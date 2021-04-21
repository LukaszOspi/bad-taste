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
      <StreamingProvidersList streamingProvidersList={streamingProvidersList} />
    </div>
  );
};

export default CardDetails;
