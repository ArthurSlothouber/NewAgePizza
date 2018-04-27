import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseForm from './components/base'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcom to New Age Pizza</h1>
          
        </header>
       </div>
    );
  }
}

export default App;
