import React from "react";
import MediaList from "./MediaList";
import "./Media.css";
import { useHistory } from "react-router-dom";

const CardList = ({ swipedMedia }) => {
  const history = useHistory();

  const backCardPage = () => {
    history.push("/card-page");
  };
  console.log(swipedMedia.liked.length);

  return (
    <>
      <div>
        <button className="return-button" onClick={backCardPage}>
          RETURN
        </button>
      </div>
      <div className="card-list">
        <MediaList swipedMedia={swipedMedia} />
      </div>
    </>
  );
};

export default CardList;
