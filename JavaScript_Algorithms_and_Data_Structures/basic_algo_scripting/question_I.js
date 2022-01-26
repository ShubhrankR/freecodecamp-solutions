/**
 * Factorialize a Number
 * https://www.youtube.com/watch?v=R8SjM4DKK80 (Functtions)
 * https://www.youtube.com/watch?v=k7-N8R0-KY4 (Recursion)
 */

// function factorialize(num) {
//     if (num >= 1) {
//         console.log("IF num =", num);
//         let r = r * num;
//         num -= 1;
//         factorialize(num);
//         // return factorialize(num--);
//     } else {
//         console.log("ELSE num =", num);
//         // return 1;
//     }
// }

// function factorialize(num) {
//     let product = 1;
//     for (let i = 2; i <= num; i++) {
//         product *= i;
//     }
//     return product;
// }

function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    console.log('Num =', num)
    return num * factorialize(num - 1);
}

console.log(factorialize(5));
