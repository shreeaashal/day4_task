//Print odd numbers in an array using IIFE function
let result = [];
(function odd (a) {
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2!==0){
            result.push(a[i]);
            
        }
    }
    console.log(result)
})
([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

