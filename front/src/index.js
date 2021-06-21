import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './hogwarts.png';
import "@fontsource/roboto";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <App className="App"/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
