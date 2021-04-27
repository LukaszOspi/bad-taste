import { useState, useReducer, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { likeHandler } from "./services/utilityFunctions";
import React from "react";
import logo from "./assets/logoPlaceholder.jpg";
import "./App.css";
import ScrollToTop from "./services/ScrollToTop";
import Home from "./components/home/Home";
import CardPage from "./components/card_page/CardPage";
import CardDetails from "./components/card-details/CardDetails";
import CardList from "./components/card-list/CardList";

function App() {
  const history = useHistory();
  const [mediaList, setMediaList] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [streamingProvidersList, setStreamingProvidersList] = useState();
  const [mediaDetails, setMediaDetails] = useState();
  const [mediaCredits, setMediaCredits] = useState();
  const [dropdownSearchValue, setDropdownSearchValue] = useState({
    title: "",
    id: "",
  });
  const [swipedMedias, dispatchSwipedMedia] = useReducer(likeHandler, {
    liked: [
      {
        video: false,
        vote_average: 6.6,
        overview:
          "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
        release_date: "2013-10-29",
        adult: false,
        backdrop_path: "/uhYoytlNaq46dG81wLmHqaSuzWu.jpg",
        vote_count: 13330,
        genre_ids: [28, 12, 14],
        id: 76338,
        original_language: "en",
        original_title: "Thor: The Dark World",
        poster_path: "/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
        title: "Thor: The Dark World",
        popularity: 72.095,
      },
    ],
    disliked: [],
  });

  // const [swipedMedias, setSwipedMedias] = useState({
  //   liked: [],
  //   disliked: [],
  // });

  useEffect(() => {
    console.log(swipedMedias);
  }, [swipedMedias]);

  return (
    <div className="App">
      <ScrollToTop>
        <header className="App-header">
          <nav>
            <img
              id="logo"
              alt="logo"
              src={logo}
              onClick={() => history.push("/")}
            />
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Home
              setMediaList={setMediaList}
              dropdownSearchValue={dropdownSearchValue}
              setDropdownSearchValue={setDropdownSearchValue}
            />
          </Route>
          <Route path="/card-page">
            <CardPage
              dropdownSearchValue={dropdownSearchValue}
              mediaList={mediaList}
              setMediaList={setMediaList}
              displayIndex={displayIndex}
              setDisplayIndex={setDisplayIndex}
              setStreamingProvidersList={setStreamingProvidersList}
              setMediaDetails={setMediaDetails}
              setMediaCredits={setMediaCredits}
              dispatchSwipedMedia={dispatchSwipedMedia}
            />
          </Route>
          <Route path="/card-details">
            <CardDetails
              streamingProvidersList={streamingProvidersList}
              mediaDetails={mediaDetails}
              mediaCredits={mediaCredits}
            />
          </Route>
          <Route path="/card-list">
            <CardList swipedMedias={swipedMedias} />
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
