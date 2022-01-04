/**
 * Iterate Through an Array with a For Loop
 */
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    console.log("i val =", i);
    total += myArr[i];
}
console.log("Total is =", total);
