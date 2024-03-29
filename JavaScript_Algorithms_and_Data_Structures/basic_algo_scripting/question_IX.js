/**
 * Slice and Splice
 * ===================
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 *
 * Criteria -
 * frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]
 * frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]
 * frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
 *
 */

function frankenSplice(arr1, arr2, n) {
    let affArr = arr2.slice(0, arr2.length);
    affArr.splice(n, 0, ...arr1);
    return affArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
