/**
 * Sum All Odd Fibonacci Numbers
 * ================================
 * Given a positive integer num, return the sum of all odd Fibonacci
 * numbers that are less than or equal to num.
 *
 * The first two numbers in the Fibonacci sequence are 1 and 1.
 * Every additional number in the sequence is the sum of the two
 * previous numbers. The first six numbers of the Fibonacci sequence
 * are 1, 1, 2, 3, 5 and 8.
 *
 * For example, sumFibs(10) should return 10 because all odd Fibonacci
 * numbers less than or equal to 10 are 1, 1, 3, and 5.
 *
 * AC -
 * -----------
 * - sumFibs(1) should return a number
 * - sumFibs(1000) should return 1785
 * - sumFibs(4000000) should return 4613732
 * - sumFibs(4) should return 5
 * - sumFibs(75024) should return 60696
 * - sumFibs(75025) should return 135721
 *
 */

function sumFibs(num) {
    let fibArr = [];
    let oddFibArr = [];
    let sumationArr = [];
    let result;
    for (let i = 0; i < num; i++) {
        // 1, 1 + 0, 1 + 1, (1 + 1) + (1 + 0),
        if (fibArr.length <= 1) {
            fibArr.push(1);
        } else {
            fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
        }
    }
    oddFibArr = fibArr.filter((e) => e % 2 != 0);
    sumationArr = oddFibArr.filter((e) => e <= num);
    result = sumationArr.reduce((a, b) => a + b);
    // console.log("For number =", num);
    // console.log("Fib array =", fibArr);
    // console.log("Odd Fib array =", oddFibArr);
    // console.log("Sum Odd Fib array less then num =", sumationArr);
    console.log(`Result of ${num} =`, result);
    return result;
}

sumFibs(1);
sumFibs(4); // 5
sumFibs(10); // 10
sumFibs(1000); // 1785
sumFibs(4000000); // 4613732
sumFibs(75024); // 60696
sumFibs(75025); // 135721
