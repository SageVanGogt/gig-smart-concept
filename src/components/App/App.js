import React, { Component } from 'react';
import './App.css';
import Job from './../Job/Job';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="">
            <img src="menu-button-of-three-horizontal-lines.png" className="Menu-icon" />
          </a>
          <a href="https://gigsmart.com/">
            <img src="gigsmart-footer-logo.png" className="App-logo"/>
          </a>
          <a href="https://github.com/SageVanGogt">
            <img src="man-user.png" className="User-icon" />
          </a>
        </header>
        <Job/>
      </div>
    );
  }
}

export default App;
