import React from 'react';
import './App.css';
import {TestForm} from './components/TestForm'

function App() {

  const callServer = (values: any) => {
    console.log(values)
    fetch('http://localhost:5000/', values)
    .then(res => res.json())
    .catch(err => err);
  }

  return (
    <div className="App">
      <div style={{textAlign: "center", paddingTop:50}}>
        <h1> Bienvenue sur Rate Drindrin</h1>
        <span> On va voir à quel point Drindrin est géniale</span>
      </div>
      <br/>
      <br/>
      <TestForm onSubmit={callServer}/>
    </div>
  );
}

export default App;
