import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';






export class ToppingForm extends React.Component {
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
        alert('A Topping was submitted: ' + this.state.value);
        event.preventDefault();
    }


render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    After that you pick a maximum of three toppings:
          <select value={this.state.value} onChange={this.handleChange}>
                        <option value="pineapple">Pineapple € 0,50</option>
                        <option value="corn">Corn € 0,50</option>
                        <option value="olives">Olives (green) € 0,50</option>
                        <option value="onion">Red onion € 0,50</option>
                        <option value="spinach">Spinach € 0,50</option>
                        <option value="tomatoes">Cherry tomatoes € 0,50</option>
                        <option value="chicken">Chicken € 0,50</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
