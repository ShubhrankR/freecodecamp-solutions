/**
 * Write Concise Declarative Functions with ES6
 */

// Original Code
// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear: function (newGear) {
//         this.gear = newGear;
//     },
// };
// // Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
