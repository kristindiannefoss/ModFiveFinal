import React, { Component } from 'react';
import { render } from 'react-dom';
// const scoreWord = require('./scoreWord.js');
import ActionButton from './ActionButton.js';

class Controls extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentWord: '',
    };
  }

  render(){
    const word = this.state.currentWord;
    return(
      <div className='controls'>
        <input
          type='text'
          placeholder='Enter a word to score'
          value={ this.state.currentWord }
          onChange={ ( e ) => this.setState( { currentWord: e.target.value } ) }
          />
        <button
          className="submitButton"
          onClick={ () => this.props.handleWord( this.state.currentWord ) }>
          Submit
        </button>
      </div>
    )
  }
}

module.exports = Controls;

          // handleClick={ this.submitWord( word ) }
//
          // onChange={ ( e ) => this.setState( { currentWord: e.target.value } ) }

          // <ActionButton
          //   buttonText="Submit"
          //   handleWord={ () => scoreWord(word) }
          //   />
