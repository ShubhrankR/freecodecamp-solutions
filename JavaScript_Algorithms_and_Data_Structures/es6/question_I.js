/**
 * Mutate an Array Declared with const
 * -----------------------------------
 * However, it is important to understand that objects
 * (including arrays and functions) assigned to a variable
 * using const are still mutable. Using the const declaration
 * only prevents reassignment of the variable identifier.
 * `````````````````````
 * const s = [5, 6, 7];
 * s = [1, 2, 3];
 * s[2] = 45;
 * console.log(s);
 * `````````````````````
 * As you can see, you can mutate the object [5, 6, 7] itself and the
 * variable s will still point to the altered array [5, 6, 45]. Like
 * all arrays, the array elements in s are mutable, but because const
 * was used, you cannot use the variable identifier s to point to a
 * different array using the assignment operator.
 */

const s = [5, 7, 2];
function editInPlace() {
    const replacingVals = [2, 5, 7];
    for (let i = 0; i < s.length; i++) {
        console.log('orig array =', s[i]);
        console.log('Replacing array =', replacingVals[i]);
        s[i] = replacingVals[i];
    }
    return s;
}
const result = editInPlace();
console.log("Result =", result);
