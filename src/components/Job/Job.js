import React, { Component } from 'react';
import MapContainer from './../MapContainer/MapContainer';
import './Job.css';

class Job extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="Job"> 
        <MapContainer />
      </div>
    )
  }
}

export default Job;
