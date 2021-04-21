import StreamingProviders from './StreamingProviders';
const StreamingProvidersList = ({ streamingProvidersList }) => {
  return (
    <div className="streaming-options">
      {!streamingProvidersList.flatrate ? null : (
        <div className="stream">
          {streamingProvidersList.flatrate.map((provider) => {
            return (
              <StreamingProviders
                logo={provider.logo_path}
                name={provider.provider_name}
              />
            );
          })}
        </div>
      )}
      {!streamingProvidersList.buy ? null : (
        <div className="buy">
          {streamingProvidersList.buy.map((provider) => {
            return (
              <StreamingProviders
                logo={provider.logo_path}
                name={provider.provider_name}
              />
            );
          })}
        </div>
      )}
      {!streamingProvidersList.rent ? null : (
        <div className="rent">
          {streamingProvidersList.rent.map((provider) => {
            return (
              <StreamingProviders
                logo={provider.logo_path}
                name={provider.provider_name}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StreamingProvidersList;
