import { useState, useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import CardPage from './components/card_page/CardPage';

function App() {
  const [mediaList, setMediaList] = useState([]);
  const [mediaDetails, setMediaDetails] = useState([]);
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
            mediaDetails={mediaDetails}
            setMediaDetails={setMediaDetails}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
