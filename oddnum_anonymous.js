//Print odd numbers in an array using anonymous function 

let result=[]
var odd = function(a){
for(let i=0;i<a.length;i++)
{
    if(a[i]%2!==0){
        result.push(a[i]);
        
    }
}
return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))