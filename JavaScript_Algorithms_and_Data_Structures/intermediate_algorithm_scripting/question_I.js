/**
 * Sum All Numbers in a Range
 * ============================
 *
 * We'll pass you an array of two numbers. Return the
 * sum of those two numbers plus the sum of all the numbers
 * between them. The lowest number will not always come first.
 *
 * For example, sumAll([4,1]) should return 10 because sum
 * of all the numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arr) {
    const copyArr = [...arr];
    const sortedArr = copyArr.sort((a, b) => a - b);
    let numArr = [];
    for (let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++) {
        numArr.push(i);
    }
    const sumOfArrEl = numArr.reduce((a, b) => a + b);
    return sumOfArrEl;
}

console.log("Result =", sumAll([4, 1]));
