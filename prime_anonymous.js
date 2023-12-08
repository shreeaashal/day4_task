////Print all the prime numbers in an array using a anonymous function    
    
var prime = function (arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))















