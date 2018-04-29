import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




export class SauceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A Sauce was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your sauce
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="red">Red sauce</option>
                        <option value="white">White sauce</option>
                        <option value="double">Double red sauce € 1,00</option>
                        <option value="mix">Mix it up € 1,50</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        sauce: state.sauce,
    }
}

export default connect(mapStateToProps)(SauceForm);