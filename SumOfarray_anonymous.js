//Sum of all the numbers in an array using anonymous function 

let result = 0;
var  sum = function(arr){

arr.forEach(n=> result+=n);
return result;
}
console.log(sum([45, 55, 65]))