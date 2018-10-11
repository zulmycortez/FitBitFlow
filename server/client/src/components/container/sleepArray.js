import React from './React';
import { fetchSleep } from './actions'

const data = this.props.sleep.map(z => {
    return z.timeInBed;
});

export default data(fetchSleep);