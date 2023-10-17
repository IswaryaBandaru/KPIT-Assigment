function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
  }

const prompt = require('prompt-sync')();
let sentence = prompt("Enter sentence: ");
console.log(reverseWords(sentence));