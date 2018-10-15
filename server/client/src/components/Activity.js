import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class Activity extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="main-container">
          <h1 id="title">FitbitFlow</h1>
          <div className="hello">
          <Button 
              bsStyle="danger"
              id="back-btn"
              onClick={this.navigateToHomePage}>
              Back
            </Button>
              <div className="hello" style={wellStyles}>
              <Link to={`/activity/steps`}>
              <Button bsStyle="primary" bsSize="large" block >
                  Calories Burned and Steps Walked
                </Button>
                </Link>
                <br />
                <Link to={`/activity/heartrate`}>
                <Button bsStyle="primary" bsSize="large" block >
                  Calories Burned and Resting Heart Rate
                </Button>
                </Link>
              </div>
          </div>
      </div>
    );
  }
}

export default Activity;