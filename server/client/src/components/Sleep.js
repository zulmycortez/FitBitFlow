import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Button } from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class Sleep extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage() {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="main-container">
          <h1 id="title">FitbitFlow</h1>
          <div className="hello">
            <Button 
              bsStyle="danger"
              onClick={this.navigateToHomePage}>
              Back to Home Page
            </Button>
              <div className="well" style={wellStyles}>
              <Link to={`/sleep/steps`}>
              <Button bsStyle="primary" bsSize="large" block >
                  Hours Slept and Steps Walked
                </Button>
                </Link>
                <Link to={`/sleep/activity`}>
                <Button bsStyle="primary" Link={`/sleep/activity`} bsSize="large" block >
                  Hours Slept and Calories Burned
                </Button>
                </Link>
              </div>
          </div>
      </div>
    );
  }
}

export default Sleep;