import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/sleep" component={Sleep} />
          <Route exact path="/heartrate" component={HeartRate} />
          <Route exact path="/activity" component={Activity} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;