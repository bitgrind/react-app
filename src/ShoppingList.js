import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ShoppingLast extends React.Component {
  render() {
    return(
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Turntables</li>
          <li>DJ Mixer</li>
          <li>Electric Guitar</li>
        </ul>
      </div>
    )
  }
}