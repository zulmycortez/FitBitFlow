import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import HomePage from './HomePage';
import Sleep from './Sleep';
import SleepAndActivityLinearGraph from './containers/SleepAndActivityLinearGraph'
import SleepAndStepsLinearGraph from './containers/SleepAndStepsLinearGraph'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/sleep" component={Sleep} />
            <Route exact path="/sleep/activity" component={SleepAndActivityLinearGraph} />
            <Route exact path="/sleep/steps" component={SleepAndStepsLinearGraph} />
          </div>
        </BrowserRouter>
      </div>
    )
  };
};

export default connect(null, actions)(App);