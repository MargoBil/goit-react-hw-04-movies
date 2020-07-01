import React, {Component} from 'react';

import s from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    value: '',
  };

  handleChange = ({target}) => {
    this.setState({value: target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
