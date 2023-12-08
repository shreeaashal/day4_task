// //Return all the palindrome in an array using a anonymous function
var palindrome = function(b) {
    var result = [];
    for(i=0; i< b.length; i++){
    var c = b[i].split("").reverse().join("")
    if (c === b[i]){
    result.push(b[i]) 
    }
    }
    return result;
    }
    console.log(palindrome(["mam", "mango", "nan", "tat"]));