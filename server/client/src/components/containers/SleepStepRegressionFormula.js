import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSleep, fetchSteps} from '../../actions/index.js';
import './App.css';

class SleepStepRegressionFormula extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSleep();
        this.props.fetchSteps();
    }

    sleepRegression ()  {
        console.log(this.props);
        var y = this.props.sleep;
        var x = this.props.steps;
        var lr = {};
        var n = y.length;
        var sum_x = 0
        var sum_y = 0
        var sum_xy = 0
        var sum_xx = 0
        var sum_yy = 0
        
        for (var i = 0; i < y.length; i++) {
            sum_x += x[i];
            sum_y += y[i];
            sum_xy += (x[i]*y[i]);
            sum_xx += (x[i]*x[i]);
            sum_yy += (y[i]*y[i]);
        } 
        
        lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
        lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
        lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);
        
        return lr;
    }
    render() {

        let lr = this.sleepRegression();

        return (
            <div>
                <h2 className="sleep-title">Sleep Statistics</h2>
                <div className="left-hand-box">
                    <p>Y-Intercept = {parseFloat(lr.intercept).toFixed(3)}</p>
                    <p>Slope = {parseFloat(lr.slope).toFixed(3)}</p>
                    <p>R^2 = {parseFloat(lr.r2).toFixed(3)}</p>
                </div>
                <div className="right-hand-box"></div>
            </div>
        );
    }   
}

function mapStateToProps ({ sleep, steps }) {
    return { sleep, steps };
}

export default connect (mapStateToProps, { fetchSleep, fetchSteps })(SleepStepRegressionFormula);