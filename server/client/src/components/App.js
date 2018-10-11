import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import HomePage from './HomePage';
import Sleep from './Sleep';
// import HeartRate from './HeartRate';
// import Activity from './Activity';

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
            {/* <Route exact path="/heartrate" component={HeartRate} />
            <Route exact path="/activity" component={Activity} /> */}
          </div>
        </BrowserRouter>
      </div>
    )
  };
};

export default connect(null, actions)(App);