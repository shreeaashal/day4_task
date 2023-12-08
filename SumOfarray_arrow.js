//Sum of all numbers in an array using Arrow function

let result = 0
let sum = (arr)=>{
arr.forEach(n=> result+=n)
console.log(result)
}
sum([34,56,90])