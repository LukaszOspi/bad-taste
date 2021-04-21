import { useState, useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import CardPage from './components/card_page/CardPage';


function App() {
  const [mediaList, setMediaList] = useState([]);
  const [mediaDetails, setMediaDetails] = useState([]);

//   const redirectCard= () => {
//     let history = useHistory();
// history.push('/card-page')
//   };

//   useEffect(() => {
//     redirectCard();
//   }, [mediaList]);


  return (


<div className='auto-container'>
      <Switch>
          <Route exact path="/">
            <Home setMediaList={setMediaList} />
           </Route>
          <Route path="/card-page">
            <CardPage
              mediaList={mediaList}
              mediaDetails={mediaDetails}
              setMediaDetails={setMediaDetails} />
          </Route>
      </Switch>
    </div>

  );
}

export default App;
