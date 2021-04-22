import StreamingProviders from './StreamingProviders';
import './StreamingProvidersList.css';

const StreamingProvidersList = ({ streamingProvidersList }) => {
  return (
    <div className="streaming-options">
      {!streamingProvidersList.flatrate ? (
        <p>This content is not availabe for streaming in your region</p>
      ) : (
        <div className="stream">
          <h3>Stream:</h3>
          <div className="icons">
            {streamingProvidersList.flatrate.map((provider) => {
              return (
                <StreamingProviders
                  logo={provider.logo_path}
                  name={provider.provider_name}
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
          <h3>Buy:</h3>
          <div className="icons">
            {streamingProvidersList.buy.map((provider) => {
              return (
                <StreamingProviders
                  logo={provider.logo_path}
                  name={provider.provider_name}
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
          <h3>Rent:</h3>
          <div className="icons">
            {streamingProvidersList.rent.map((provider) => {
              return (
                <StreamingProviders
                  logo={provider.logo_path}
                  name={provider.provider_name}
                  key={provider.provider_id}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default StreamingProvidersList;
