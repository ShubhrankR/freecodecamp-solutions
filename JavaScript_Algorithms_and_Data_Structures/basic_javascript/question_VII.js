/**
 * Generate Random Whole Numbers within a Range
 */
const random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random =", random);

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

const newRandom = randomRange();
console.log("Another random =", newRandom);
