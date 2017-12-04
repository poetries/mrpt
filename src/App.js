import React, { Component } from 'react';
import './App.css';
import routeMap from './routes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
           {routeMap}
      </div>
    );
  }
}
