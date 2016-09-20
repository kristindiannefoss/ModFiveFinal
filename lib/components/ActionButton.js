import React, { Component } from 'react';
import { render } from 'react-dom';
const scoreWord = require('./scoreWord.js');

class ActionButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button
        className="ActionButton"
        onClick={ (word) => this.props.handleWord( word ) }>
        { this.props.buttonText }
      </button>
    )
  }
}

module.exports = ActionButton;
