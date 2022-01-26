/**
 * Sort an Array Alphabetically using the sort Method
 * ====================================================
 *
 * JavaScript's default sorting method is by string Unicode
 * point value, which may return unexpected results. Therefore,
 * it is encouraged to provide a callback function to specify
 * how to sort the array items. When such a callback function,
 * normally called compareFunction, is supplied, the array elements
 * are sorted according to the return value of the compareFunction:
 * If compareFunction(a,b) returns a value less than 0 for two elements
 * a and b, then a will come before b. If compareFunction(a,b) returns
 * a value greater than 0 for two elements a and b, then b will come
 * before a. If compareFunction(a,b) returns a value equal to 0 for
 * two elements a and b, then a and b will remain unchanged.
 */

function alphabeticalOrder(arr) {
    // Only change code below this line
    console.log("Arr =", arr);
    // return arr.sort((a, b) => {
    //     if (a === b) {
    //         console.log("IF Here A =", a);
    //         console.log("IF Here B =", b);
    //         console.log("IF a = b");
    //         console.log("IF a = b val = 0");
    //     } else {
    //         console.log("ELSE a = b");
    //         if (a < b) {
    //             console.log("IF Here A =", a);
    //             console.log("IF Here B =", b);
    //             console.log("IF a < b");
    //             console.log("IF a < b then val 1");
    //         } else {
    //             console.log("ELSE Here A =", a);
    //             console.log("ELSE Here B =", b);
    //             console.log("ELSE a < b");
    //             console.log("ELSE a < b then val -1");
    //         }
    //     }
    // });
    return arr.sort((a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
    });
    // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}

reverseAlpha(["l", "h", "z", "b", "s"]);

function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

ascendingOrder([1, 5, 2, 3, 4]);

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return arr.concat([]).sort((a, b) => {
        return a - b;
    });
    // Only change code above this line
}

nonMutatingSort(globalArray);
