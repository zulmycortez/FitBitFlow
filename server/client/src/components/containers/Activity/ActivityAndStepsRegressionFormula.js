import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchActivity, fetchSteps} from '../../../actions/index.js';

class ActivityStepRegressionFormula extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchActivity();
        this.props.fetchSteps();
    }

    activityRegression ()  {
        console.log(this.props);
        var y = this.props.activity;
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

        let lr = this.activityRegression();

        return (
            <div>
                <div className="legend-box">
                    <p>Y-Intercept = {parseFloat(lr.intercept).toFixed(3)}</p>
                    <p>Slope = {parseFloat(lr.slope).toFixed(3)}</p>
                    <p>R^2 = {parseFloat(lr.r2).toFixed(3)}</p>
                </div>
                <div className="tips-box">
                    <h3><i>Tips on reading graph:</i></h3>
                    <p>
                        In theory, the Y-intercept can be read as the point that would occur if you walked 0 steps in one day. So 0 steps, for you would equate to {parseFloat(lr.intercept).toFixed(0)} calories burned in day.
                    </p>
                    <p>
                        Next, the slope would a scenario where if you were to burn one more calorie, based on your trend line, you will walk {parseFloat(lr.slope).toFixed(0)} more step in that day.
                    </p>
                    <p>
                        Finally, your R^2 is the percentage of the response variable variation that is explained by the linear model we chose. A perfect model would be an R^2 of 1 and an imperfect model would be closer to 0.
                    </p>
                </div>
            </div>
        );
    }   
}

function mapStateToProps ({ activity, steps }) {
    return { activity, steps };
}

export default connect (mapStateToProps, { fetchActivity, fetchSteps })(ActivityStepRegressionFormula);