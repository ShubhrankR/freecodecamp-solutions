/**
 * Steamroller
 * =============
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 * AC -
 * ---------
 * - steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]
 * - steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]
 * - steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]
 * - steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
 * - Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 *
 * Hints -
 * ----------
 * - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */

function steamrollArray(arr) {
    // console.log(`Flated arr of arr ${[...arr]} is =`, arr.flat()); // defaults to 1 depth
    // console.log(`Flated arr of arr ${[...arr]} is =`, arr.flat(3));
    let flatArr = [];
    arr.forEach((e) => {
        console.log(`Element [${e}] is array =`, Array.isArray(e));
        if (Array.isArray(e)) {
            console.log(`Element ${e} recursion --- `);
            flatArr.push(...steamrollArray(e));
        } else {
            console.log(`Element ${e} is pushed to flatArr --- `);
            flatArr.push(e);
        }
    });
    return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
