/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/
const compression = (str) => {
    let = totlacounts = {};
    for(let i=0; i<str.length; i++){
        const doSomething = str[i];
        if(totlacounts[doSomething]){
            totlacounts += doSomething;
        }
        else{
            totlacounts[doSomething] = doSomething;
        }
    }
}

module.exports = compression;