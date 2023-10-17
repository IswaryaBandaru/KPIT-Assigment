function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
} 

const prompt = require('prompt-sync')();
let array = prompt("Enter list: ");
let numericArray = array.split(" ").map(Number);
let sortedArray = arrSort(numericArray);
console.log(sortedArray);