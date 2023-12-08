//Convert all the strings to title caps in a string array using a anonymous function      

let result=[]
var upper = function(arr){
for(let i=0;i<arr.length;i++)
{
   var c = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
        result.push(c);
        
    
}
return result;
}
console.log(upper(["apple", "orange", "watermelon" ]))