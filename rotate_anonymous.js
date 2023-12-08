//Rotate the given array k times using a anonymous function
let rotate = function(arr,k){
    let n = arr.length
    k = k % n;
    for(i=0; i<k; i++){
     arr.unshift(arr.pop())
    }
    return arr
}
console.log(rotate([2,3,4,5,6], 6))