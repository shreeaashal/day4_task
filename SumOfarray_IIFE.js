//Sum of all numbers in an array using IIFE function 

let result = 0;
(function sum (arr) {
arr.forEach(n=> result+=n)
console.log(result);
})
([50,90])

