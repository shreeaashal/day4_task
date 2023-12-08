// find the median of the given two array using anonymous function
var median = function(arr,brr){
    var c = [...arr,...brr]
    c.sort((a,b)=>a-b)
    var middle = Math.floor((c.length)/2);
   if (c.length % 2 ===0){
    
    return(c[middle-1] + c[middle])/2
   }
   return c[middle]
}
console.log(median([11,24,53,43],[69,76,82,97,100]))