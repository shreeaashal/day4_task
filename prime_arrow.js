////Print all the prime numbers in an array using a arrow function  

var prime = (arr)=>{
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
}   
prime([1,2,3,4,5,11,12,13,14,15,21,22,23,24,25])