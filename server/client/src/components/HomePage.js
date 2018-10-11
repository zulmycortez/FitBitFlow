import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
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
                    </div>
                    <div className="hello">
                    <h2>Hello {this.props.auth.user.firstName},</h2>
                   <h5>Please select which area you're most interested in learning more about:</h5>
                   <i class="glyphicon glyphicon-bed"></i>
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