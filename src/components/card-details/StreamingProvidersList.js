import StreamingProviders from './StreamingProviders';
const StreamingProvidersList = ({ streamingProvidersList }) => {
  return (
    <div className="streaming-options">
      {!streamingProvidersList.flatrate ? null : (
        <div className="stream">
          <h3>Stream:</h3>
          <div className="icons">
            {streamingProvidersList.flatrate.map((provider) => {
              return (
                <StreamingProviders
                  logo={provider.logo_path}
                  name={provider.provider_name}
                />
              );
            })}
          </div>
        </div>
      )}
      {!streamingProvidersList.buy ? null : (
        <div className="buy">
          <h3>Buy:</h3>
          <div className="icons">
            {streamingProvidersList.buy.map((provider) => {
              return (
                <StreamingProviders
                  logo={provider.logo_path}
                  name={provider.provider_name}
                />
              );
            })}
          </div>
        </div>
      )}
      {!streamingProvidersList.rent ? null : (
        <div className="rent">
          <h3>Rent:</h3>
          <div className="icons">
            {streamingProvidersList.rent.map((provider) => {
              return (
                <StreamingProviders
                  logo={provider.logo_path}
                  name={provider.provider_name}
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
