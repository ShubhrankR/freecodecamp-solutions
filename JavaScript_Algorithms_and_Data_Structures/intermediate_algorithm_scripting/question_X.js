/**
 * Sorted Union
 * ================
 * Write a function that takes two or more arrays and returns a new
 * array of unique values in the order of the original provided arrays.
 * In other words, all values present from all arrays should be included
 * in their original order, but with no duplicates in the final array.
 * The unique numbers should be sorted by their original order, but the
 * final array should not be sorted in numerical order.
 *
 * Check the assertion tests for examples.
 *
 * AC -
 * ----------
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]
 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
 * uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6]
 * uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]
 *
 * Refs -
 * ----------
 * - https://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array/42123984#42123984
 *
 */

function uniteUnique(arr) {
    console.log("Input arguments =", arguments);
    let resultArr = [];
    let twoDArr = [];
    for (let i of arguments) {
        // console.log(i);
        twoDArr = twoDArr.concat(i);
    }
    resultArr = twoDArr.filter((item, i, ar) => {
        console.log("Filter item -", item);
        console.log("Filter i -", i);
        console.log("Filter ar -", ar);
        console.log("Filter condition =", ar.indexOf(item) === i);
        return ar.indexOf(item) === i;
    });
    // console.log("two2Arr -", twoDArr);
    // console.log("two2Arr -", [...new Set(twoDArr)]);
    console.log("Result -", resultArr);
    return resultArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
