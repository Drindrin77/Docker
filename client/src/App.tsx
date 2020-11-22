import React from 'react';
import './App.css';
import {TestForm} from './components/TestForm'
import axios from 'axios'
import { message } from 'antd';

function App() {

  const callServer = (values: any) => {
    axios.post('http://localhost:5000/', values)
    .then(response => {
      return message.success(response.data);
    })
    .catch(error => {
      console.log(error)
      return message.error("Erreur");
    });
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
