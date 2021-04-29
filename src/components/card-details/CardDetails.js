import { useHistory } from "react-router-dom";
import { useContext } from "react";
import MediaContext from "../../context";
import StreamingProvidersList from "./StreamingProvidersList";
import MovieInfo from "./MovieInfo";
import TvShowInfo from "./TvShowInfo";
import "./CardDetails.css";
import "../../index.css";

const CardDetails = ({
  streamingProvidersList,
  mediaDetails,
  mediaCredits,
}) => {
  const history = useHistory();
  const { mediaType } = useContext(MediaContext);

  const showList = () => {
    history.push("/card-page");
  };

  return (
    <div className="card-details">
      <button onClick={showList}>Back to the list</button>
      <br />
      <br />
      {!mediaDetails ? (
        <p>Error while trying to gather information about this content</p>
      ) : mediaType === "movie" ? (
        <MovieInfo mediaDetails={mediaDetails} mediaCredits={mediaCredits} />
      ) : (
        <TvShowInfo mediaDetails={mediaDetails} mediaCredits={mediaCredits} />
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
