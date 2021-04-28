import { useState, useReducer } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { likeHandler } from "./services/utilityFunctions";
import React from "react";
import logo from "./assets/logoPlaceholder.jpg";
import "./App.css";
import ScrollToTop from "./services/ScrollToTop";
import Home from "./components/home/Home";
import CardPage from "./components/card-page/CardPage";
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
  const [swipedMedia, dispatchSwipedMedia] = useReducer(likeHandler, {
    liked: [],
    disliked: [],
  });

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
              swipedMedia={swipedMedia}
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
            <CardList swipedMedia={swipedMedia} />
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
