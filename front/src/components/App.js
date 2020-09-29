import React from 'react';
import '../styles/App.css';
import SensorChecker from "./SensorChecker"
import Header from "./Header"

function App(){
  return(
      <div className="App">
          <Header/>
          <SensorChecker/>
      </div>
  )
}

export default App;
