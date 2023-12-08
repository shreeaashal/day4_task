// remove the duplicate value from thr given array using anonymous function
var duplicate = function (arr){
    return [...new Set(arr)]
}
console.log(duplicate([1,2,2,4,3,5,3,7,6,8,7,5]))