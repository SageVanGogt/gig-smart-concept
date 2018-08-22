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
        <section className="Job-overview">
          <div className='Job-reviews'>
            <h4>REVIEWS</h4>
            <div className='star-container'>
              <img src="star.png" alt="star"/>
              <img src="star.png" alt="star"/>
              <img src="star.png" alt="star"/>
              <img src="star.png" alt="star"/>
              <img src="star-empty.png" alt="star"/>
              <p>98 Reviews</p>
            </div>
          </div>
          <div className="Job-name">
            <h4>NAME</h4>
            <h3>Sage Vogt</h3>
          </div>
          <div className="Job-rate">
            <h4>RATE</h4>
            <h3>$lets talk / hr</h3>
          </div>
          <div className="Job-references"></div>
        </section>
        <MapContainer />
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <h3 className="accordion-title">Skills</h3>
              <img 
                src="angle-arrow-down.png" 
                alt="" 
                className="arrow"
              />
               <img 
                src="up-arrow.png" 
                alt="" 
                className="arrow-selected"
              />
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Javascript, React, Redux, Jest, Enzyme, CSS, SASS, HTML, Node, Express, RESTful API design</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <h3 className="accordion-title">About Me</h3>
              <img 
                src="angle-arrow-down.png" 
                alt="" 
                className="arrow"
              />
              <img 
                src="up-arrow.png" 
                alt="" 
                className="arrow-selected"
              />
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Recent grad of Colorado College, avid mountain biker, climber, and innovation enthusiast. Does not like long walks on the beach.</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <h3 className="accordion-title">References</h3>
              <img 
                src="angle-arrow-down.png" 
                alt="" 
                className="arrow"
              />
              <img 
                src="up-arrow.png" 
                alt="" 
                className="arrow-selected"
              />
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Such an incredible young lad - Grandma</li>
                <li>I'd hire him if I knew how the internet worked - Dad</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
}

export default Job;
