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
      <h3>WHERE DelayType = "ANY" AND FlightNumber = "{"flightNum" in filters ? filters["flightNum"] : "ANY" }" AND airlineCode = "{"airline" in filters ? filters["airline"] : "ANY" }" AND airportStart = "{"airportStart" in filters ? filters["airportStart"] : "ANY" }" AND airportEnd = "{"airportEnd" in filters ? filters["airportEnd"] : "ANY" }"  </h3>
      <h3>AND Cancelled = "{"cancelled" in filters ? filters["cancelled"] : "false" }" AND diverted = "{"diverted" in filters ? filters["diverted"] : "false" }" AND International = "{"international" in filters ? filters["international"] : "false" }" AND domestic = "{"domestic" in filters ? filters["domestic"] : "false" }"  </h3>

      <Graphdisplay/>
      </div>

    </div>
  );
}



export default App;
