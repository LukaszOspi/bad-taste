import React from "react";
import './App.css';
import FilterButton from './Components/FilterButton';

function App() {
  return (
    <div className="App">
      <div className="filter-button">
          <FilterButton filterName='Book'/>
          <FilterButton filterName='Film'/>
          <FilterButton filterName='Music'/>
          <FilterButton filterName='TV'/>
      </div>
    
    </div>
    

  
  );
}

export default App;
