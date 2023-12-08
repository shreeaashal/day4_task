// Convert all the strings to title caps in a string array using Arrow function

let result = [];
var upper = (arr) => { 

    for(let i=0;i<arr.length;i++){
        var c = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
            result.push(c);
        
    }
    console.log(result)
}
upper(["ant", "spider", "parrot"])