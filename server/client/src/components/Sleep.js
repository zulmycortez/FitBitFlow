import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSleep, fetchActivity, fetchHeartRate } from '../actions';

class Sleep extends Component {
    componentDidMount() {
        this.props.fetchSleep();
        this.props.fetchActivity();
        this.props.fetchHeartRate();
    }

    renderSleep() {
           
    }

    render() {
        console.log(this.renderSleep());
        return (
            <div>
                {/* {this.renderSleep()} */}
                <h5>Please select which area you're most interested in learning more about:</h5>
            </div>
        );
    }
}

function mapStateToProps ({ sleep }) {
    return { sleep }; 
}


export default connect (mapStateToProps, { fetchSleep, fetchActivity, fetchHeartRate })(Sleep);