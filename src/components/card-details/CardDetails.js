import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchStreamingProvidersTMDB from '../../services/fetchStreamingProvidersTMDB';
import StreamingProvidersList from './StreamingProvidersList';

const CardDetails = ({ displayIndex, mediaList }) => {
  const history = useHistory();
  const [streamingProvidersList, setStreamingProvidersList] = useState({});
  const showList = () => {
    history.push('/card-page');
  };

  useEffect(() => {
    fetchStreamingProvidersTMDB(
      mediaList[displayIndex].id,
      setStreamingProvidersList
    );
  }, []);

  return (
    <div className="card-details">
      <button onClick={showList}>Back to the list</button>
      <h2>Additional details for this movie</h2>
      <StreamingProvidersList streamingProvidersList={streamingProvidersList} />
    </div>
  );
};

export default CardDetails;
