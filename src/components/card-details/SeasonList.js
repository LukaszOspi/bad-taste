import { useState, useContext } from 'react';
import MediaContext from '../../context';
import '../../index.css';

const SeasonList = () => {
  const { appState } = useContext(MediaContext);
  const [selectedSeason, setSelectedSeason] = useState(1);

  return (
    <div className="season-list">
      <div className="season-number">
        {appState.mediaDetails.seasons.map((s, i) => {
          return s.season_number > 0 ? (
            <button
              className={`season-button ${
                s.season_number === selectedSeason ? 'selected' : null
              }`}
              onClick={(e) => setSelectedSeason(parseInt(e.target.innerText))}
              key={i}
            >
              {s.season_number}
            </button>
          ) : null;
        })}
      </div>
      <div className="season-info">
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w500${appState.mediaDetails.seasons[selectedSeason].poster_path}`}
        />
        <div className="season-info">
          <p>{`Original air date: ${appState.mediaDetails.seasons[selectedSeason].air_date}`}</p>
          <p>{`Number of episodes: ${appState.mediaDetails.seasons[selectedSeason].episode_count}`}</p>
          <p>{appState.mediaDetails.seasons[selectedSeason].overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SeasonList;
