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

function scoreLetter(char){
  const bigChar = char.toUpperCase();
  const object = _.pick(letterScores, bigChar);
  var result = _.valuesIn(object);
  return result;
}

function splitWord(word){
  const trimmedWord = _.trim(word);
  const wordArray = _.split(trimmedWord, '');
  const scores = _.map(wordArray, function (c) { return parseInt(scoreLetter(c)); }
  );
  const summedScores = _.sum(scores);
  return  summedScores;
}

module.exports = (word) => {
    return splitWord(word);
};
