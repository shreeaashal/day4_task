//Return all the palindrome in an array using a IIFE function
(function palindrome(b) {
    var result = [];
    for(i=0; i< b.length; i++){
    var c = b[i].split("").reverse().join("")
    if (c === b[i]){
    result.push(b[i]) 
    }
    }
   console.log(result)
    })
(["mam", "mango", "mom", "tat"]);