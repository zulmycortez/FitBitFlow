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
    combined.push( [ y[i], x[i] ] );
  }

  return combined;

}
  render() {
    return <ScatterPlotSleepSteps data={this.newArray()} />
  }
}

function mapStateToProps ({ sleep, steps }) {
  return { sleep, steps };
}

export default connect (mapStateToProps, { fetchSleep, fetchSteps })(SleepAndStepsLinearGraph);