import React, { Component } from "react"
import { connect } from 'react-redux';
import ScatterPlotSleepSteps from "./ScatterPlotSleepSteps"
import {fetchSleep, fetchSteps} from '../../../actions';
import { Button } from "react-bootstrap";

class SleepAndStepsLinearGraph extends Component {
  constructor(props) {
    super(props)
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage() {
    this.props.history.push('/sleep');
  }

componentDidMount() {
    this.props.fetchSleep();
    this.props.fetchSteps();
}

newArray() {
  var y = this.props.steps;
  var x = this.props.sleep;
  let combined = [];

  for(let i = 0; i < y.length; i++) {
    combined.push( [ y[i], x[i]/60 ] );
  }

  return combined;

}
  render() {
    if(this.props.sleep.length > 0 && this.props.steps.length > 0) {
      return (
        <div className="main-container">
              <Button 
              bsStyle="danger"
              id="back-btn"
              onClick={this.navigateToHomePage}>
              Back
            </Button>
          <h1 id="title">FitbitFlow</h1>
          <ScatterPlotSleepSteps data={this.newArray()} />
       </div>
      )
      
    } else {
        return (
            <div className="loading">
              <br />
              Calculating large numbers...
              <p><span className="dot"> </span>
              <span className="dot"> </span>
              <span className="dot"> </span>
              <span className="dot"> </span></p>
            </div>
        )
      }
  }
}

function mapStateToProps ({ sleep, steps }) {
  return { sleep, steps };
}

export default connect (mapStateToProps, { fetchSleep, fetchSteps })(SleepAndStepsLinearGraph);