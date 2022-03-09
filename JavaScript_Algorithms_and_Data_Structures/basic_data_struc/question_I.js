/**
 * Copy an Array with the Spread Operator
 * ======================================
 * We have defined a function, copyMachine which takes arr (an array)
 * and num (a number) as arguments. The function is supposed to return
 * a new array made up of num copies of arr. We have done most of the
 * work for you, but it doesn't work quite right yet. Modify the function
 * using spread syntax so that it works correctly (hint: another method
 * we have already covered might come in handy here!).
 */

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// You can achieve the same results without 
// using the spread opereator
// the use of spread operator is to be expanded as single
// values
function updatedCopyMachine(arr, num) {
    let newArr = [];
    let newUpdatedArr = []
    while (num >= 1) {
        newArr.push(arr); // this will yield same result as above without using spread
        newUpdatedArr.push(...arr)
        num--;
    }
    return {newArr, newUpdatedArr};
}

console.log(updatedCopyMachine([true, false, true], 2)); // newUpdatedArr will be a classic example of spread operator
