import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export class BaseForm extends React.Component {
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
        alert('A Base was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your base
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="8,99">25cm NY Style € 8,99</option>
                        <option value="11,49">30cm NY Style € 11,49</option>
                        <option value="13,49">35cm NY Style € 13,49</option>
                        <option value="6,45">20cm NY Style € 6,45</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        base: state.base,
    }
}

export default connect(mapStateToProps)(BaseForm);