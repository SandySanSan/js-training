'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
let splitStr = str.split(" ");
let newStr = '';


for (let i=0; i<splitStr.length;i++) {
newStr += splitStr[i][0].toUpperCase() + splitStr[i].slice(1) + ' ';

}

return newStr.trim();


}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("How can mirrors be real if our eyes aren't real"), "How Can Mirrors Be Real If Our Eyes Aren't Real");

// End of tests */
