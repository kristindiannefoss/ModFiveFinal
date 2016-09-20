import React, { Component } from 'react';
import { render } from 'react-dom';
const scoreWord = require('./scoreWord.js');
const LastWord  = require('./LastWord.js');
import Controls from './Controls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lastWord: '',
      score: 0,

    };
  }
  doStuff(word) {
    this.setState({
       lastWord: word,
       score: scoreWord(word)
     });
  }

  render(){
    return(
      <div className='main'>
        <h1>hi</h1>
        <LastWord word={ this.state.lastWord } />
        <Controls
          handleWord={ (word) => this.doStuff(word) }
          />
        <p> { this.state.score } </p>
      </div>
    )
  }
}

export default App;

// <button className='submit-word' onClick={(word) => {scoreWord(word)}}>Submit</button>
// <h1>{scoreWord('hi')}</h1>


// <p> Last word: {this.state.lastWord || 'X'} </p>

// doTwoThings(word){
//   this.setState( { lastWord: word, score: scoreWord(word) }
// }
