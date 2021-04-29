import React from "react";
import "./Media.css";
import "../../index.css";

const Media = (props) => {
  return (
    <div className="media-container">
      <div>
        <img
          className="media-image"
          src={
            `https://image.tmdb.org/t/p/w92${props.img}` ||
            "./src/assets/img-placeholder.png"
          }
          alt="poster-image"
        ></img>
      </div>
      <div className="media-title">
        {props.title}

        <div className="media-year">
          <p>
            Release date:<br></br> {props.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Media;
