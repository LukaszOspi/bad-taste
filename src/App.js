import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import SearchContainer from './components/SearchContainer';

function App() {
  const [mediaList, setMediaList] = useState([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="auto-container">
        <Home setMediaList={setMediaList} />
      </div>
    </div>
  );
}

export default App;
