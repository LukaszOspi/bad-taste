import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import CardPage from './components/card_page/CardPage';

function App() {
  const [mediaList, setMediaList] = useState([]);
  const [mediaDetails, setMediaDetails] = useState([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Home setMediaList={setMediaList} />
      <CardPage
        mediaList={mediaList}
        mediaDetails={mediaDetails}
        setMediaDetails={setMediaDetails}
      />
    </div>
  );
}

export default App;
