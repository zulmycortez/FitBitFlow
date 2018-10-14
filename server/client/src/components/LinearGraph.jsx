import React, { Component } from "react"
import { connect } from 'react-redux';

import ScatterPlot from "./ScatterPlot"
import {fetchSleep, fetchActivity, fetchSteps} from '../actions/index.js';


class LinearGraph extends Component {
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
    return <ScatterPlot data={this.newArray()} />
  }
}

function mapStateToProps ({ sleep, steps }) {
  return { sleep, steps };
}

export default connect (mapStateToProps, { fetchSleep, fetchSteps })(LinearGraph);