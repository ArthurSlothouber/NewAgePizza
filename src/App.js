import React, { Component } from 'react';
import logo from './images.png';
import './App.css';
import { BaseForm } from './components/base';
import { SauceForm } from './components/sauce';
import { ToppingForm } from './components/topping';
import { Submitted } from './components/submit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME TO NEW AGE PIZZA</h1>
        </header>
        <BaseForm />
        <hr />
        <SauceForm />
        <hr />
        <ToppingForm />
        <Submitted />

       </div>
    );
  }
}

export default App;
