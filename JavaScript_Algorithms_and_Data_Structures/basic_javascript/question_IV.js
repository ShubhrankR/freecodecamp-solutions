/**
 * Nesting For Loops
 */
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        console.log("First arr =", arr[i]);
        for (let j = 0; j < arr[i].length; j++) {
            console.log("Second arr =", arr[i][j]);
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

let result = multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
]);
console.log("Result is =", result);
