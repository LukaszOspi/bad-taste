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
  const [dropdownSearchValue, setDropdownSearchValue] = useState('');

  // function setDropdownSearchValue(newValue, originalValue=dropdownSearchValue) {
  //   originalValue = newValue
  //   return originalValue
  // }
  // setDropdownSearchValue('ospi', dropdownSearchValue)

  //   const redirectCard= () => {
  //     let history = useHistory();
  // history.push('/card-page')
  //   };

  //   useEffect(() => {
  //     redirectCard();
  //   }, [mediaList]);

  return (
    <div className="auto-container">
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
