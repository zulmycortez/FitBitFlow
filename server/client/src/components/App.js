import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import HomePage from './HomePage';
import Sleep from './Sleep';
import SleepAndActivityLinearGraph from './containers/Sleep/SleepAndActivityLinearGraph'
import SleepAndStepsLinearGraph from './containers/Sleep/SleepAndStepsLinearGraph'
import Activity from './Activity';
import ActivityAndStepsLinearGraph from './containers/Activity/ActivityAndStepsLinearGraph'
import ActivityAndHeartRateLinearGraph from './containers/Activity/ActivityAndHeartRateLinearGraph'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sleep" component={Sleep} />
            <Route exact path="/sleep/activity" component={SleepAndActivityLinearGraph} />
            <Route exact path="/sleep/steps" component={SleepAndStepsLinearGraph} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/activity/steps" component={ActivityAndStepsLinearGraph} />
            <Route exact path="/activity/heartrate" component={ActivityAndHeartRateLinearGraph} />
          </div>
        </BrowserRouter>
      </div>
    )
  };
};

export default connect(null, actions)(App);