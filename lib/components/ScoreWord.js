'use strict';
import _ from 'lodash';

const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
};

const scoreLetter = ( char ) => {
  return _.valuesIn( _.pick( letterScores, char.toUpperCase() ) );
};

const splitWord = ( word ) => {
  const wordArray = _.split( _.trim( word ), '' );
  const scores = _.map( wordArray, function ( c )
    { return parseInt( scoreLetter( c ) ); }
  );
  return  _.sum( scores );
};

const multiplier = ( word, n ) => {
    if(n){
      return n * splitWord( word );
    } else {
      return splitWord( word );
    }
};

module.exports = ( word, n ) => {
    return multiplier( word, n );
};
