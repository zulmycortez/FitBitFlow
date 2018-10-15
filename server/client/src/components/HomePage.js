import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { Link } from 'react-router-dom'

import './App.css';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    renderGreeting() {
        if(this.props.auth && this.props.auth.user) {
            return (
                <div>
                <div className="main-container">
                    <div className="">
                        <h1 id="title">FitbitFlow</h1>
                            <div className="header">
                                <ul>
                                <li>Average Daily Steps: {this.props.auth.user.averageDailySteps}</li>
                                <li>Member Since: {this.props.auth.user.memberSince}</li>
                                </ul>
                            </div>
                        <br />
                    </div>
                    <div className="hello">
                    <h2>Hello {this.props.auth.user.firstName},</h2>
                    <i>This application uses linear regression, a statistical technique. It assess how successfully a <b>predictive variable</b> does its job in predicting the <b>outcome variable</b>.</i>
                   <p>Please select which <b>outcome variable</b> you're most interested in learning more about:</p>
                   
                   <div className="icons">
                   <span>
                       Sleep
                       <p><Link to ={`/sleep`}><img src="https://png.icons8.com/ios-glyphs/50/000000/sleeping-in-bed.png" alt="Sleeping analysis"/></Link></p>
                    </span>
                   <span>
                       <p>Calories Burned</p>
                       <p><Link to ={`/activity`}><img src="https://png.icons8.com/ios-glyphs/50/000000/gas.png" alt="Calories Burned analysis"/></Link></p>
                    </span>
                   </div>
                   </div>
                </div>
                <br />
                    <button type="button" id="logout" class="btn btn-warning">Logout</button>
                    </div>
           )
        } else {
            return (
                <div className="loading">
                <br />
                Loading...
                <p><span className="dot"> </span>
                <span className="dot"> </span>
                <span className="dot"> </span>
                <span className="dot"> </span></p>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                
                {this.renderGreeting()}
            </div>
        );
    }
}
function mapStateToProps ({ auth }) {
    return { auth };
    
}
export default connect (mapStateToProps, { fetchUser })(HomePage);