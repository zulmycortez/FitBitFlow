import React, { Component } from "react"
import { connect } from 'react-redux';
import ScatterPlotSleepActivity from "./ScatterPlotSleepActivity"
import {fetchSleep, fetchActivity} from '../../actions';

class SleepAndActivityLinearGraph extends Component {
    constructor(props) {
      super(props)
  }
  
  componentDidMount() {
      this.props.fetchSleep();
      this.props.fetchActivity();
  }
  
  newArraySleepActivity() {
    var y = this.props.sleep;
    var x = this.props.activity;
    let combined = [];
  
    for(let i = 0; i < y.length; i++) {
      combined.push( [ y[i], x[i] ] );
    }

    return combined;
  
  }
    render() {
      if(this.props.sleep.length > 0 && this.props.activity.length > 0) {
        return <ScatterPlotSleepActivity data={this.newArraySleepActivity()} />
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
  
  function mapStateToProps ({ sleep, activity }) {
    return { sleep, activity };
  }
  
  export default connect (mapStateToProps, { fetchSleep, fetchActivity })(SleepAndActivityLinearGraph);