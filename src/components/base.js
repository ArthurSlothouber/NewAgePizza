import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';





export class BaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '25cm' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your base
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="25cm">25cm NY Style € 8,99</option>
                        <option value="30cm">30cm NY Style € 11,49</option>
                        <option value="35cm">35cm NY Style € 13,49</option>
                        <option value="20cm">20cm NY Style</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}