import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/home/Home';
import CardPage from './components/card_page/CardPage';
import CardDetails from './components/card-details/CardDetails';

function App() {
  const [mediaList, setMediaList] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [streamingProvidersList, setStreamingProvidersList] = useState();
  const [mediaDetails, setMediaDetails] = useState();
  const [mediaCredits, setMediaCredits] = useState();
  const [dropdownSearchValue, setDropdownSearchValue] = useState({
    title: '',
    id: '',
  });

  return (
    <div className="App">
      <header className="App-header"></header>
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
          />
        </Route>
        <Route path="/card-details">
          <CardDetails
            streamingProvidersList={streamingProvidersList}
            mediaDetails={mediaDetails}
            mediaCredits={mediaCredits}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
