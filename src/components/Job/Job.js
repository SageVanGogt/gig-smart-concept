import React, { Component } from 'react';
import MapContainer from './../MapContainer/MapContainer';
import './Job.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Job extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="Job">
        <MapContainer />
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>Skills</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Javascript, React, Redux, Jest, Enzyme, CSS, SASS, HTML, Node, Express, RESTful API design</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>About Me</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Recent grad of Colorado College, avid mountain biker, climber, and innovation enthusiast. Does not like long walks on the beach.</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>Availability</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Currently available for full time employment</p>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
}

export default Job;
