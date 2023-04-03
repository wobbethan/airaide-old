import './App.css';
import GraphMenu from './components/graphMenu.js'
import Login from './components/login'
import Graphdisplay from './components/graph'
import Profile from './components/profile'
import { useState } from 'react';

//import background from './assets/planebg.png'

function App() {
  const [filters, setFilters] = useState({})

  const updateFilters = (searchFilters) => {
    setFilters(searchFilters);
  }


  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#87CEEB"

    }}>

      <div>
      <Login/>
      <Profile/>
      <GraphMenu callback={updateFilters}/>
      <h3>SELECT *</h3>
      <h3>FROM (tables)</h3>
      <h3>WHERE DelayType = "" AND FlightNumber = "{"flightNum" in filters ? filters["flightNum"] : "FLIGHTNUM" }" AND airlineCode = "{"airline" in filters ? filters["airline"] : "AIRLINE" }" AND airportStart = "{"airportStart" in filters ? filters["airportStart"] : "AIRPORT START" }" AND airportEnd = "{"airportEnd" in filters ? filters["airportEnd"] : "AIRPORT END" }" </h3>
      <Graphdisplay/>
      </div>

    </div>
  );
}



export default App;
