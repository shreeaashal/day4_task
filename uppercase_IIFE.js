// Convert all the strings to title caps in a string array using IIFE function
let result = [];
(function upper (arr) {
    for(let i=0;i<arr.length;i++)
    {
        var c = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
         result.push(c);
            
        
    }
    console.log(result)
})
(["lion", "tiger", "elephant"])

