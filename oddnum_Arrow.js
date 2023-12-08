//Print odd numbers in an array using Arrow function

let result = [];
var odd=(a) => { 

    for(let i=0;i<a.length;i++){
        if(a[i]%2!==0){
            result.push(a[i]);
        }
    }
    console.log(result)
}
odd([21,22,23,24,25,26,27,28])