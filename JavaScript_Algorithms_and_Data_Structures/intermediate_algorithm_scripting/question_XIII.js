/**
 * Sum All Primes
 * ================
 * A prime number is a whole number greater than 1 with exactly
 * two divisors: 1 and itself. For example, 2 is a prime number
 * because it is only divisible by 1 and 2. In contrast, 4 is
 * not prime since it is divisible by 1, 2 and 4.
 *
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 *
 * AC -
 * ------------
 * - sumPrimes(10) should return a number
 * - sumPrimes(10) should return 17
 * - sumPrimes(977) should return 73156
 *
 * Help -
 * ------------
 * - https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085
 *
 */

function sumPrimes(num) {
    // function isPrime(singleNum) {
    //     if (singleNum < 2) return false;
    //     if (singleNum === 2) return true;
    //     for (let i = 2; i < singleNum; i++) {
    //         if (singleNum % i === 0) {
    //             return false;
    //         }
    //         return true;
    //     }
    // }

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            // console.log(`Current number ${i} is prime -`, isPrime(i));
            sum += i;
        }
    }
    console.log(`Sum of upto ${num} prime numbers is -`, sum);
    return sum;
}

sumPrimes(10);
sumPrimes(977);
