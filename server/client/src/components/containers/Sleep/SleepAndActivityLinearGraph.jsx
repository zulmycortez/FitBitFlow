import React, { Component } from "react"
import { connect } from 'react-redux';
import ScatterPlotSleepActivity from "./ScatterPlotSleepActivity"
import {fetchSleep, fetchActivity} from '../../../actions';
import { Button } from "react-bootstrap";

class SleepAndActivityLinearGraph extends Component {
    constructor(props) {
      super(props)
      this.navigateToHomePage = this.navigateToHomePage.bind(this);
    }
  
    navigateToHomePage() {
      this.props.history.push('/sleep');
    }
  
  componentDidMount() {
      this.props.fetchSleep();
      this.props.fetchActivity();
  }
  
  newArraySleepActivity() {
    var y = this.props.activity;
    var x = this.props.sleep;
    let combined = [];
  
    for(let i = 0; i < y.length; i++) {
      combined.push( [ y[i], x[i]/60 ] );
    }

    return combined;
  
  }
    render() {
      if(this.props.sleep.length > 0 && this.props.activity.length > 0) {
        return (
          <div className="main-container">
              <Button 
              bsStyle="danger"
              id="back-btn"
              onClick={this.navigateToHomePage}>
              Back
            </Button>
            <h1 id="title">FitbitFlow</h1>
            <ScatterPlotSleepActivity data={this.newArraySleepActivity()} />
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
  
  function mapStateToProps ({ sleep, activity }) {
    return { sleep, activity };
  }
  
  export default connect (mapStateToProps, { fetchSleep, fetchActivity })(SleepAndActivityLinearGraph);