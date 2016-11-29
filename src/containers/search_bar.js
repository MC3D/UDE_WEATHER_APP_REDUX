import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this._handleInput = this._handleInput.bind(this);
  }
  _handleInput(event){
    this.setState({term: event.target.value});
  }
  _handleSubmit(event){
    event.preventDefault();
    
    // need to fetch weather data
  }
  render() {
    return (
      <form onSubmit={this._handleSubmit} className='input-group'>
        <input
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this._handleInput}
         />
        <span className='input-group-btn'>
          <button className='btn btn-secondary' type='submit'>SUBMIT</button>
        </span>
      </form>
    );
  }
}
