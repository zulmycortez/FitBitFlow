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
                <div className="main-container">
                    <div className="">
                        <h1 id="title">FitbitFlow</h1>
                            <div className="header">
                                <ul>
                                <li><strong>Average Daily Steps:</strong> {this.props.auth.user.averageDailySteps}</li>
                                <li><strong>Member Since:</strong> {this.props.auth.user.memberSince}</li>
                                </ul>
                            </div>
                        <br />
                    </div>
                    <div className="hello">
                    <h2>Hello {this.props.auth.user.firstName},</h2>
                   <h5>Please select which area you're most interested in learning more about:</h5>
                   <div className="icons">
                   <span>
                       <p>Sleep</p>
                       <p><Link to ={`/sleep`}><img src="https://png.icons8.com/ios-glyphs/50/000000/sleeping-in-bed.png"/></Link></p>
                    </span>
                   <span>
                       <p>Calories Burned</p>
                       <p><Link to ={`/sleep`}><img src="https://png.icons8.com/ios-glyphs/50/000000/gas.png"/></Link></p>
                    </span>
                   <span>
                       <p>Resting Heart Rate</p>
                       <p><Link to ={`/sleep`}><img src="https://png.icons8.com/windows/50/000000/heart-with-pulse.png"/></Link></p>
                    </span>
                   </div>
                   </div>
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
        console.log(this.props.auth.user)
        return (
            <div>
                
                {this.renderGreeting()}
            </div>
        );
    }
}

function mapStateToProps ({ auth }) {
    console.log(auth);
    return { auth };
    
}


export default connect (mapStateToProps, { fetchUser })(HomePage);