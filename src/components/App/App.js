import React, { Component } from 'react';
import './App.css';
import Job from './../Job/Job';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="menu-button-of-three-horizontal-lines.png" className="Menu-icon" />
          <img src="gigsmart-footer-logo.png" className="App-logo"/>
          <img src="man-user.png" className="User-icon" />
        </header>
        <Job/>
      </div>
    );
  }
}

export default App;
