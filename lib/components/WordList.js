import React, { Component } from 'react';
import { render } from 'react-dom';
const scoreWord = require('./scoreWord.js');
import lodash from 'lodash'

class WordList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='wordListDiv'>
        <ul>
          { _.map(array, <li>{ word : score } </li>) }
        </ul>
      </div>
    )
  }
}

module.exports = WordList;
