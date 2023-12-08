////Print all the prime numbers in an array using a IIFE function

(function prime (arr) {
    let result = [];
    
for(let i=0; i<arr[i]; i++){
    let isPrime = true;
    if(arr[i]<=1){
        isPrime = false;
    } else{
        for(let j=2; j<=Math.sqrt(arr[i]); j++){
          if(arr[i] % j === 0){
            isPrime = false;
            break;
          }
        }
    }
        if (isPrime){
            result.push(arr[i]);
        }
    
}
console.log(result)
})
([21,22,23,24,25,31,32,41,42,35,36,37,38,39,49,47])