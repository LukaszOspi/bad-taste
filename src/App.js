import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Card from './components/FilterButton';
import Home from './components/home/Home';
import CardPage from './components/card_page/CardPage';
import CardDetails from './components/card-details/CardDetails';

function App() {
  const [mediaList, setMediaList] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [streamingProvidersList, setStreamingProvidersList] = useState({});
  const [dropdownSearchValue, setDropdownSearchValue] = useState({
    title: '',
    id: '',
  });

  console.log(streamingProvidersList);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route exact path="/">
          <div className="filter-button">
            <Card />
          </div>
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
          />
        </Route>
        <Route path="/card-details">
          <CardDetails
            displayIndex={displayIndex}
            mediaList={mediaList}
            streamingProvidersList={streamingProvidersList}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
