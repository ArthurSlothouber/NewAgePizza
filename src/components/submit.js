import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {BaseForm} from './base';
import {ToppingForm} from './topping';
import {SauceForm} from './sauce'


export class Submitted extends React.Component {

    render () {
        return this.state
    }

} 

function mapStateToProps(state) {
    return {
        base: state.base,
        toppings: state.toppings,
        sauce: state.sauce,
    }
}

export default connect(mapStateToProps)(Submitted);