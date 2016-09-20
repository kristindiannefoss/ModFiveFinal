'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
// const scoreWord = require('./scoreWord.js');

const LastWord = (props) => {
  const word = props.word;

  if ( !word ){ return <div className='lastWord'>Enter a word</div> }
    return (
      <div className='lastWord'>
        <p>Last word { word } </p>
      </div>
    )

}

module.exports = LastWord;
