import React from "react";
import Media from "./Media";

const MediaList = (props) => {
  const { swipedMedias } = props;
  return (
    <div>
      {swipedMedias.liked.map((element, index) => {
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
