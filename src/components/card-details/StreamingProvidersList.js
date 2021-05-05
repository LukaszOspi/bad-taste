import { useContext } from 'react';
import StreamingProviders from './StreamingProviders';
import './StreamingProvidersList.css';
import '../../index.css';
import MediaContext from '../../context';

const StreamingProvidersList = () => {
  const { appState } = useContext(MediaContext);
  return (
    <div className="streaming-providers-list">
      <div className="streaming-options">
        {!appState.streamingProvidersList.flatrate ? null : (
          <div className="stream">
            <h4 className="streaming-title">Stream:</h4>
            <div className="icons">
              {appState.streamingProvidersList.flatrate.map((provider) => {
                return (
                  <StreamingProviders
                    logo={provider.logo_path}
                    // name={provider.provider_name}
                    key={provider.provider_id}
                  />
                );
              })}
            </div>
          </div>
        )}
        {!appState.streamingProvidersList.buy ? null : (
          <div className="buy">
            <h4 className="streaming-title">Buy:</h4>
            <div className="icons">
              {appState.streamingProvidersList.buy.map((provider) => {
                return (
                  <StreamingProviders
                    logo={provider.logo_path}
                    // name={provider.provider_name}
                    key={provider.provider_id}
                  />
                );
              })}
            </div>
          </div>
        )}
        {!appState.streamingProvidersList.rent ? null : (
          <div className="rent">
            <h4 className="streaming-title">Rent:</h4>
            <div className="icons">
              {appState.streamingProvidersList.rent.map((provider) => {
                return (
                  <StreamingProviders
                    logo={provider.logo_path}
                    // name={provider.provider_name}
                    key={provider.provider_id}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamingProvidersList;
