import React, { Component } from "react"
import { connect } from 'react-redux';
import ScatterPlotSleepSteps from "./ScatterPlotSleepSteps"
import {fetchSleep, fetchSteps} from '../../actions';

class SleepAndStepsLinearGraph extends Component {
  constructor(props) {
    super(props)
}

componentDidMount() {
    this.props.fetchSleep();
    this.props.fetchSteps();
}

newArray() {
  var y = this.props.sleep;
  var x = this.props.steps;
  let combined = [];

  for(let i = 0; i < y.length; i++) {
    combined.push( [ y[i]/60, x[i] ] );
  }

  return combined;

}
  render() {
    if(this.props.sleep.length > 0 && this.props.steps.length > 0) {
      return (
        <div className="main-container">
          <h1 id="title">FitbitFlow</h1>
          <ScatterPlotSleepSteps data={this.newArray()} />
       </div>
      )
      
    } else {
        return (
            <div className="loading">
            <br />
            Calculating large numbers please be patient...
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