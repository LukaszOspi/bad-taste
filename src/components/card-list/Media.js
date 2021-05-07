import React from 'react';
import './Media.css';
import bubble from '../../assets/yellow-bubble.png';
import cross from '../../assets/bold-marker-cross.png';

const Media = (props) => {
  return (
    <div className="media-container">
      <div className="media-image-div">
        <img
          className="media-image"
          src={
            `https://image.tmdb.org/t/p/w185${props.img}` ||
            './src/assets/img-placeholder.png'
          }
          alt="poster"
        />
      </div>
      <div className="media-info-container">
        <div className="media-title">
          <h1>{props.title}</h1>
        </div>
        <div className="button-div">
          <div className="info-button-div">
            <img
              className="mobile-like-button"
              alt="info"
              src={bubble}
              onClick={props.info}
            />
          </div>
          <div className="info-button-div">
            <img
              className="mobile-like-button"
              alt="info"
              src={cross}
              onClick={props.remove}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
