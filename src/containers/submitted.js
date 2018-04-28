import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Submitted extends Component {
    render () {
        return (
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return{
        base: state.base,
        sauce: state.sauce,
        toppings: state.toppings

    }
}

export default Submitted;