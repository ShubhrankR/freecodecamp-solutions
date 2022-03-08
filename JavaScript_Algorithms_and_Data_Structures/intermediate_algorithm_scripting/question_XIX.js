/**
 * Arguments Optional
 * ===================
 * Create a function that sums two arguments together. If only
 * one argument is provided, then return a function that expects
 * one argument and returns the sum.
 *
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function
 *
 * Calling this returned function with a single argument will then return the sum:
 *
 * var sumTwoAnd = addTogether(2);
 *
 * sumTwoAnd(3) returns 5
 *
 * If either argument isn't a valid number, return undefined.
 *
 * AC -
 * ----------
 * - addTogether(2, 3) should return 5
 * - addTogether(23, 30) should return 53
 * - addTogether(5)(7) should return 12
 * - addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined
 * - addTogether(2, "3") should return undefined
 * - addTogether(2)([3]) should return undefined
 * - addTogether("2", 3) should return undefined
 *
 * Hints -
 * ----------
 * - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-arguments-optional/14271
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
 */

function addTogether() {
    // let argsArr = [...arguments];
    // console.log("Args =", argsArr);
    // if (argsArr.length > 0) {
    //     argsArr.forEach((e) => {
    //         console.log(`Element ${e} is number? -`, typeof e === 'number');
    //     });
    // }
    // let a = function(n) {
    //     console.log('Second arg -', n)
    // }
    // return false;
    const [first, second] = arguments;
    if (typeof first !== "number") return undefined;
    if (second === undefined) return (second) => addTogether(first, second);
    if (typeof second !== "number") return undefined;
    return first + second;
}

addTogether(2, 3);
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
addTogether(2, "3");
// addTogether(2)([3]);
addTogether("2", 3);
