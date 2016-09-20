'use strict';
const _ = require('lodash');
const assert = require('chai').assert;
// const expect = require('chai').expect;
import scoreWord from '../lib/components/scoreWord.js';

describe('the test bundle', function () {
  it('isnt a garbage fire, yet', function () {
    assert(true);
  });

  it('can give me objects', function () {
    const score = scoreWord('a');
    assert.equal(1 , score);
  });

});

// describe('the scoreWord function', function () {
//   it('can score an uppercase letter', function () {
//     const score = scoreWord('A');
//     assert.equal(1, score);
//   });
//
//   it('can score another uppercase letter', function () {
//     const score = scoreWord('B');
//     assert.equal(3, score);
//   });
//
//   it('can score another other uppercase letter', function () {
//     const score = scoreWord('Z');
//     assert.equal(10, score);
//   });
//
//   it('can score an lowercase letter', function () {
//     const score = scoreWord('a');
//     assert.equal(1, score);
//   });
//
//   it('can score another lowercase letter', function () {
//     const score = scoreWord('b');
//     assert.equal(3, score);
//   });
//
//   it('can score another other lowercase letter', function () {
//     const score = scoreWord('z');
//     assert.equal(10, score);
//   });
// });


// scoreWord() takes a word and returns the total score of the word.
// scoreWord('hello') should return 8.
// An empty string or any non-string (e.g. scoreWord('') or scoreWord(null)) should return 0.
// The function should strip any whitespace before or after the word. scoreWorld(' hello ') should be the same as scoreWord('hello').
// Score word should take an optional second argument for the word multiplier. scoreWord('hello', 2) should return 16.
