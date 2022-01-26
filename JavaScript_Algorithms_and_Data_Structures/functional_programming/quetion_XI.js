/**
 * Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
 * ============================================================================
 *
 * Q: Complete the code for the squareList function using any combination of map(),
 * filter(), and reduce(). The function should return a new array containing the
 * squares of only the positive integers (decimal numbers are not integers) when
 * an array of real numbers is passed to it. An example of an array of real
 * numbers is [-3, 4.8, 5, 3, -3.2].
 *
 * Note: Your function should not use any kind of for or while loops or the forEach() function.
 *
 * AC -
 * squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
 * squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49]
 */

const squareList = (arr) => {
    // Only change code below this line
    const integerArr = arr.filter((el) => el > 0 && Number.isInteger(el));
    console.log("Integer array =", integerArr);
    const filteredArr = integerArr.filter((el) => el > 0);
    console.log("Filtered array =", filteredArr);
    const squArr = filteredArr.map((el) => el * el);
    return squArr;
    // Only change code above this line
};

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
// const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);

console.log("Result =", squaredIntegers);

// const squareList = (arr) => {
//     // Only change code below this line
//     return arr
//         .filter((num) => num > 0 && num % parseInt(num) === 0)
//         .map((num) => Math.pow(num, 2));
//     // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// const squareList = (arr) => {
//     return arr.reduce((sqrIntegers, num) => {
//         return Number.isInteger(num) && num > 0
//             ? sqrIntegers.concat(num * num)
//             : sqrIntegers;
//     }, []);
// };
