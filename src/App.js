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
      <p>Injected Code: {"injectedCode" in filters? filters["injectedCode"] : "Fail"}</p>
      <Graphdisplay/>
      </div>

    </div>
  );
}



export default App;
