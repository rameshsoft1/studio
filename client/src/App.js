import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './auth/Register';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="App-header row"> 
          <div className="col">Header</div>
        </header>
        <Register></Register>
      </div>
    );
  }
}

export default App;
