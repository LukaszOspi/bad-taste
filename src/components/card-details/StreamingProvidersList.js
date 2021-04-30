import StreamingProviders from './StreamingProviders';
import './StreamingProvidersList.css';
import '../../index.css';

const StreamingProvidersList = ({ streamingProvidersList }) => {
  return (
    <div className="streaming-providers-list">
      <div className="streaming-options">
        {!streamingProvidersList.flatrate ? (
          <p>This content is not availabe for streaming in your region</p>
        ) : (
          <div className="stream">
            <h4 className="streaming-title">Stream:</h4>
            <div className="icons">
              {streamingProvidersList.flatrate.map((provider) => {
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
        {!streamingProvidersList.buy ? (
          <p>This content is not availabe for buy in your region</p>
        ) : (
          <div className="buy">
            <h4 className="streaming-title">Buy:</h4>
            <div className="icons">
              {streamingProvidersList.buy.map((provider) => {
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
        {!streamingProvidersList.rent ? (
          <p>This content is not availabe for rent in your region</p>
        ) : (
          <div className="rent">
            <h4 className="streaming-title">Rent:</h4>
            <div className="icons">
              {streamingProvidersList.rent.map((provider) => {
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
