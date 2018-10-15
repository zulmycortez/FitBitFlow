import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class Sleep extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
      <div className="main-container">
      <br />
      <br />
          <h1 id="title">FitbitFlow</h1>
          <div className="hello">
            <Button 
              bsStyle="danger"
              id="back-btn"
              onClick={this.navigateToHomePage}>
              Back
            </Button>
              <div className="hello" style={wellStyles}>
              <Link to={`/sleep/steps`}>
              <Button bsStyle="primary" bsSize="large" block >
                  Hours Slept v. Steps Walked
                </Button>
                </Link>
                <br />
                <Link to={`/sleep/activity`}>
                <Button bsStyle="primary" bsSize="large" block >
                  Hours Slept v. Calories Burned
                </Button>
                </Link>
              </div>
          </div>
      </div>
      <br />
       </div>
    );
  }
}

export default Sleep;