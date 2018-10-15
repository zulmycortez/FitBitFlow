import React, { Component } from "react"
import { connect } from 'react-redux';
import ScatterPlotActivityHeartRate from "./ScatterPlotActivityHeartRate"
import {fetchActivity, fetchHeartRate} from '../../../actions';
import { Button } from "react-bootstrap";

class ActivityAndHeartRateLinearGraph extends Component {
  constructor(props) {
    super(props)
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage() {
    this.props.history.push('/activity');
  }

componentDidMount() {
    this.props.fetchActivity();
    this.props.fetchHeartRate();
}

newArray() {
  var y = this.props.heartRate;
  var x = this.props.activity;
  let combined = [];

  for(let i = 0; i < y.length; i++) {
    combined.push( [ y[i], x[i] ] );
  }

  return combined;

}
  render() {
    if(this.props.activity.length > 0 && this.props.heartRate.length > 0) {
      return (
        <div className="main-container">
             <Button 
              bsStyle="danger"
              id="back-btn"
              onClick={this.navigateToHomePage}>
              Back
            </Button>
          <h1 id="title">FitbitFlow</h1>
          <ScatterPlotActivityHeartRate data={this.newArray()} />
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

function mapStateToProps ({ activity, heartRate }) {
  return { activity, heartRate };
}

export default connect (mapStateToProps, { fetchActivity, fetchHeartRate })(ActivityAndHeartRateLinearGraph);