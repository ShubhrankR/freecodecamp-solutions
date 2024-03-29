/**
 * Mutations
 * ===============
 * Return true if the string in the first element of the array
 * contains all of the letters of the string in the second element of the array.
 * For example, ["hello", "Hello"], should return true because all of the letters
 * in the second string are present in the first, ignoring case. The arguments
 * ["hello", "hey"] should return false because the string hello does not contain a y.
 * Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 *
 * Resources -
 * https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-mutations/16025
 */

function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    console.log('Test =', test);
    console.log('Target =', target);
    for (let i = 0; i < test.length; i++) {
        console.log('Condition =', target.indexOf(test[i]));
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

// function mutation(arr) {
//     return arr[1]
//         .toLowerCase()
//         .split("")
//         .every(function (letter) {
//             return arr[0].toLowerCase().indexOf(letter) !== -1;
//         });
// }

// function mutation([target, test], i = 0) {
//     target = target.toLowerCase();
//     test = test.toLowerCase();
//     return i >= test.length
//         ? true
//         : !target.includes(test[i])
//         ? false
//         : mutation([target, test], i + 1);
// }

console.log(mutation(["hello", "hey"]));
