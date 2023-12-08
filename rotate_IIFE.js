//Rotate the given array k times using a IIFE function
(function rotate(arr,k){
    let n = arr.length
    k = k % n;
    for(i=0; i<k; i++){
     arr.unshift(arr.pop())
    }
    console.log(arr)
})
([2,3,4,5,6], 6)