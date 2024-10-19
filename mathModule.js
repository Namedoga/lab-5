//Part 2: Create the Math Module

export function add(a, b) { 
     return a + b;
}
export function subtract(a, b) {  
    return a - b;}


export default function multiply(a, b) {
    return a * b;
}

console.log('Add: ', add(4, 4));
console.log('Subtract: ', subtract(4, 4));
console.log('multiply: ', multiply(4, 4));


import { toUpperCase } from './stringModule.js';
 
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}
