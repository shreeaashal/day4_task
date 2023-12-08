// remove the duplicate value from thr given array using anonymous function
(function duplicate (arr){
  var result = [...new Set(arr)]
  console.log(result)
})
([1,2,2,4,3,5,3,7,6,8,7,5])