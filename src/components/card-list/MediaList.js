import React from "react";
import Media from "./Media";
import "./Media.css";
import "../../index.css";

const MediaList = (props) => {
  const { swipedMedia } = props;
  return (
    <div className="media-list">
      {swipedMedia.liked.map((element, index) => {
        return (
          <Media
            key={index}
            img={element.poster_path}
            title={element.original_title}
            year={element.release_date}
          />
        );
      })}
    </div>
  );
};

export default MediaList;
