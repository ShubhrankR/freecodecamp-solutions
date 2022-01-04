/**
 * Use Recursion to Create a Countdown
 */
function countup(n) {
    if (n < 1) {
        console.log("IF");
        return [];
    } else {
        const countArray = countup(n - 1);
        console.log("ELSE n =", n);
        countArray.push(n);
        console.log("ELSE arr =", countArray);
        return countArray;
    }
}
console.log("Result of countup recursion =", countup(5));
function countdown(n) {
    if (n < 1) {
        console.log("IF n =", n);
        return [];
    } else {
        const countDownArr = countdown(n - 1);
        console.log("ELSE n =", n);
        countDownArr.unshift(n);
        return countDownArr;
    }
}
let result = countdown(5);
console.log("Result of countdown recursion =", result);
