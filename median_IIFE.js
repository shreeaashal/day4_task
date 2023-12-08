// find the median of the given two array using IIFE function
(function median(arr,brr){
    var c = [...arr,...brr]
    c.sort((a,b)=>a-b)
    var middle = Math.floor((c.length)/2);
   if (c.length % 2 ===0){
    
    var result= (c[middle-1] + c[middle])/2
   }
   else{
    result = c[middle]
   }
  console.log(result)
}
([11,24,53,43,86],[69,76,82,97,100]))