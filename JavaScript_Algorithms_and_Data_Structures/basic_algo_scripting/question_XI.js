/**
 * Where do I Belong
 * ====================
 * Return the lowest index at which a value (second argument) should be
 * inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number. For example, getIndexToIns([1,2,3,4], 1.5)
 * should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has
 * been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 *
 * Resources -
 * https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-sort-javascript-sort-explained-with-examples/14306
 * https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-where-do-i-belong/16094
 *
 * Criteria -
 * getIndexToIns([10, 20, 30, 40, 50], 35) should return 3
 * getIndexToIns([10, 20, 30, 40, 50], 35) should return a number
 * getIndexToIns([10, 20, 30, 40, 50], 30) should return 2
 * getIndexToIns([10, 20, 30, 40, 50], 30) should return a number
 */

// function getIndexToIns(arr, num) {
//     let indexVal = 0;
//     arr = arr.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         if (num === arr[i]) {
//         } else {
//         }
//         if (num > arr[i]) {
//             console.log("Num is greater then ele =", arr[i]);
//             if (num <= arr[i + 1]) {
//                 console.log("Num is lesser then ele =", arr[i + 1]);
//                 indexVal = i;
//                 break;
//             } else {
//                 console.log("Num is not lesser then ele =", arr[i + 1]);
//             }
//         } else {
//             console.log("Num is not greater then ele =", arr[i]);
//         }
//     }
//     console.log("Index val =", indexVal + 1);
//     return indexVal + 1;
// }

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }

    return arr.length;
}

// function getIndexToIns(arr, num) {
//     return arr.filter((val) => num > val).length;
// }

// function getIndexToIns(arr, num) {
//     // sort and find right index
//     let index = arr
//         .sort((curr, next) => curr - next)
//         .findIndex((currNum) => num <= currNum);
//     // Returns index or total length of arr
//     return index === -1 ? arr.length : index;
// }

// function getIndexToIns(arr, num) {
//     return arr
//         .concat(num)
//         .sort((a, b) => a - b)
//         .indexOf(num);
// }

// getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35);
// getIndexToIns([10, 20, 30, 40, 50], 30);
// console.log(getIndexToIns([3, 10, 5], 3));
// getIndexToIns([2, 20, 10], 19);
// getIndexToIns([2, 5, 10], 15);
// getIndexToIns([], 1);
