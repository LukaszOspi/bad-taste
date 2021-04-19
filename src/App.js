import React from "react";
import './App.css';
import FilterButton from './Components/FilterButton';
import { useState } from 'react';
import Home from './components/home/Home';

function App() {
  const [mediaList, setMediaList] = useState([]);

  return (
    <div className="App">
      
      <header className="App-header"></header>
      <div className="filter-button">
          <FilterButton filterName='Book'id='book-api'/>
          <FilterButton filterName='Film'/>
          <FilterButton filterName='Music'/>
          <FilterButton filterName='TV'/>
      </div>
      <div className="auto-container">
        <Home setMediaList={setMediaList} />
      </div>
    </div>
    

  
  );
}

export default App;
