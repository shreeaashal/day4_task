//Return all the palindrome in an array using a arrow function
var palindrome = (b) => {
    var result = [];
    for(i=0; i< b.length; i++){
    var c = b[i].split("").reverse().join("")
    if (c === b[i]){
    result.push(b[i]) 
    }
    }
    console.log(result);
    }
    (palindrome(["mam", "mango", "nan", "tat"]))