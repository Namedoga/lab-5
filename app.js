
import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
 
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray

import { addAndLogUpper } from './mathModule.js';
 
addAndLogUpper(10, 20);  // Test the new function

const numbers = [4,5,8,9];
const maxNumber = findMax(numbers);
const multiplyresult = multiply(maxNumber)
console.log('Final Result: ', toUpperCase(multiplyresult.toString()));