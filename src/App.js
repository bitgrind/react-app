import React, { Component } from 'react';
import logo from './logo.svg';
import ListComponent from './list-component/list.component.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <ListComponent />
      </div>
    );
  }
}

export default App;
