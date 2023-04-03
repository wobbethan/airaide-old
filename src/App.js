import './App.css';
import GraphMenu from './components/graphMenu.js'
import Login from './components/login'
import Graphdisplay from './components/graph'
import Profile from './components/profile'

//import background from './assets/planebg.png'

function App() {
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
      <GraphMenu/>
      <Graphdisplay/>
      </div>

    </div>
  );
}



export default App;
