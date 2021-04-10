import './App.css';
import Todoinput from './Components/Todoinput.js';

function App() {
  return (
    <div className="App">
      <p style={{fontSize:"1.5rem"}}><span style={{color:"#10B981"}}>Todo app</span> with  
      <span style={{color:"#3B82F6"}}>  react</span> and 
      <span style={{color:"#FCD34D"}}>  firebase.</span></p><br/>
      <Todoinput/>
    </div>
  );
}

export default App;
