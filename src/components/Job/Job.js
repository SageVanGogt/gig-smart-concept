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

    this.state = {
      user: {},
      accOneIsSelected: false,
      accTwoIsSelected: false,
      accThreeIsSelected: false,
    }
  }

  componentDidMount = () => {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      let response = await fetch('https://api.github.com/users/SageVanGogt');
      let user = await response.json();
      this.setState({
        user
      })
    } catch (error) {
      throw error;
    }
  }

  toggleSelected = (accordion) => {
    this.setState({ [accordion]: !this.state[accordion] });
  }

  render() {
    return (
      <div className="Job">
        <section className="Job-overview">
          <div className='Job-reviews'>
            <h4>REVIEWS</h4>
            <div className='star-container'>
              <img src="star.png" alt="star" />
              <img src="star.png" alt="star" />
              <img src="star.png" alt="star" />
              <img src="star.png" alt="star" />
              <img src="star-empty.png" alt="star" />
              <p>{this.state.user.public_repos} Reviews</p>
            </div>
          </div>
          <div className="Job-name">
            <h4>NAME</h4>
            <h3>{this.state.user.name}</h3>
          </div>
          <div className="Job-avail">
            <h4>AVAILABILITY</h4>
            <h3>mon / 7:00pm - 8:00pm</h3>
          </div>
          <div className="Job-rate">
            <h4>RATE</h4>
            <h3>$10/hr</h3>
          </div>
        </section>
        <MapContainer />
        <Accordion>
          <AccordionItem  onClick={() => this.toggleSelected('accOneIsSelected')}>
            <AccordionItemTitle>
              <h3 className="accordion-title">Skills</h3>
              {
                this.state.accOneIsSelected ?
                  <img
                    src="up-arrow.png"
                    alt=""
                    className="arrow-selected"
                  /> :
                  <img
                    src="angle-arrow-down.png"
                    alt=""
                    className="arrow"
                  />
              }
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Javascript, React, Redux, Jest, Enzyme, CSS, SASS, HTML, Node, Express, RESTful API design</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem  onClick={() => this.toggleSelected('accTwoIsSelected')}>
            <AccordionItemTitle>
              <h3 className="accordion-title">About Me</h3>
              {
                this.state.accTwoIsSelected ?
                  <img
                    src="up-arrow.png"
                    alt=""
                    className="arrow-selected"
                  /> :
                  <img
                    src="angle-arrow-down.png"
                    alt=""
                    className="arrow"
                  />
              }
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>{this.state.user.bio}</p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem onClick={() => this.toggleSelected('accThreeIsSelected')}>
            <AccordionItemTitle>
              <h3 className="accordion-title">References</h3>
              {
                this.state.accThreeIsSelected ?
                  <img
                    src="up-arrow.png"
                    alt=""
                    className="arrow-selected"
                  /> :
                  <img
                    src="angle-arrow-down.png"
                    alt=""
                    className="arrow"
                  />
              }
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Such an incredible young lad - Grandma</li>
                <li>I'd hire him if I knew how the internet worked - Dad</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
        <footer className="Job-footer">
          <div className="Job-footer--icon">
            <img src="calendar.png" alt="calendar" className="footer-icon" />
          </div>
          <div className="Job-footer--icon">
            <img src="phone-receiver.png" alt="phone" className="footer-icon" />
          </div>
          <div className="Job-footer--icon">
            <img src="support.png" alt="message" className="footer-icon" />
          </div>
        </footer>
      </div>
    )
  }
}

export default Job;
