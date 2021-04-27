import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import fetchStreamingProvidersTMDB from "../../services/movie-fetch/fetchStreamingProvidersTMDB";
import fetchDetailsTMDB from "../../services/movie-fetch/fetchDetailsTMDB";
import fetchCreditsTMDB from "../../services/movie-fetch/fetchCreditsTMDB";
import fetchRecommendationsTMDB from "../../services/movie-fetch/fetchRecommendationsTMDB";

const SwipeContainer = ({
  mediaList,
  setMediaList,
  displayIndex,
  setDisplayIndex,
  setStreamingProvidersList,
  setMediaDetails,
  setMediaCredits,
  dispatchSwipedMedia,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (mediaList.length !== 0) {
      fetchStreamingProvidersTMDB(
        mediaList[displayIndex].id,
        setStreamingProvidersList
      );
      fetchDetailsTMDB(mediaList[displayIndex].id, setMediaDetails);
      fetchCreditsTMDB(mediaList[displayIndex].id, setMediaCredits);
    }
  }, [mediaList, displayIndex]);

  const showInfo = () => {
    history.push("/card-details");
  };

  const fetchNewRecommendations = async (mediaID, currentList) => {
    try {
      const newList = await fetchRecommendationsTMDB(mediaID);
      const filteredNewList = newList.filter(
        (e) => !currentList.find((d) => e.id === d.id)
      );
      return filteredNewList;
    } catch (err) {
      console.error(
        `fetchRecommendationsTMDB() in fetchNewRecommendations failed with error ${err}`
      );
    }
  };

  return (
    <>
      {mediaList.length === 0 ? null : (
        <div className="swipe-container">
          <div className="card-item">
            <button onClick={() => history.push("/card-list")}>
              Show list
            </button>
            <h1>{mediaList[displayIndex].title}</h1>
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w500${mediaList[displayIndex].poster_path}`}
            />
            <div className="action-buttons">
              <button
                onClick={() => {
                  dispatchSwipedMedia({
                    type: "dislike",
                    payload: mediaList[displayIndex],
                  });
                  setDisplayIndex(displayIndex + 1);
                }}
              >
                Dislike
              </button>
              <button onClick={showInfo}>More info</button>
              <button
                onClick={async () => {
                  dispatchSwipedMedia({
                    type: "like",
                    payload: mediaList[displayIndex],
                  });
                  setMediaList([
                    ...mediaList,
                    ...(await fetchNewRecommendations(
                      mediaList[displayIndex].id,
                      mediaList
                    )),
                  ]);
                  setDisplayIndex(displayIndex + 1);
                }}
              >
                Like
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SwipeContainer;
