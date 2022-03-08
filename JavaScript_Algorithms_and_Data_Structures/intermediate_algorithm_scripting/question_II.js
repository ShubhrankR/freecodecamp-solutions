/**
 * Diff Two Arrays
 * ===================
 *
 * Compare two arrays and return a new array with any items
 * only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 *
 * Note: You can return the array with its elements in any order.
 *
 * AC -
 * --------
 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"]
 * ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item
 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"]
 * ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items
 * ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return []
 * ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array
 * [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]
 * [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]
 * [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"]
 * [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"]
 *
 */

// function diffArray(arr1, arr2) {
//     // console.log("Arr1 is =", arr1);
//     // console.log("Arr2 is =", arr2);
//     let newArr1,
//         newArr2 = [];
//     // if (arr1.length >= arr2.length) {
//     //     console.log("IF");
//     newArr1 = [...arr1];
//     newArr2 = [...arr2];
//     // } else {
//     //     console.log("ELSE");
//     //     newArr1 = [...arr2];
//     //     newArr2 = [...arr1];
//     // }
//     // console.log("New Array1 is =", newArr1);
//     // console.log("New Array2 is =", newArr2);
//     // const newArr = newArr1.map((arr1Element) => {
//     //     let checkCond = newArr2.some(
//     //         (arr2Element) => arr2Element === arr1Element
//     //     );
//     //     if (!checkCond) return arr1Element;
//     // });
//     let returnArr = [];
//     newArr1.forEach((arr1Element) => {
//         if (!newArr2.includes(arr1Element)) returnArr.push(arr1Element);
//     });
//     newArr2.forEach((arr2Element) => {
//         if (!newArr1.includes(arr2Element)) returnArr.push(arr2Element);
//     });
//     return returnArr;
// }

function diffArray(arr1, arr2) {
    let returnArr = [];
    function returnArrGen(a1, a2) {
        a1.forEach((el1) => {
            if (!a2.includes(el1)) returnArr.push(el1);
        });
    }
    returnArrGen(arr1, arr2);
    returnArrGen(arr2, arr1);
    return returnArr;
}

console.log("Result = ", diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log("Result = ", diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(
    "Result = ",
    diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
);
console.log(
    "Result = ",
    diffArray(
        ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
);
