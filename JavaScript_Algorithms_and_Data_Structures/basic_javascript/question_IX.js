/**
 * Use Recursion to Create a Range of Numbers
 * We have defined a function named rangeOfNumbers with two parameters. 
 * The function should return an array of integers which begins with a 
 * number represented by the startNum parameter and ends with a number 
 * represented by the endNum parameter. The starting number will always 
 * be less than or equal to the ending number. Your function must use 
 * recursion by calling itself and not use loops of any kind. It should 
 * also work for cases where both startNum and endNum are the same.
 */
function rangeOfNumbers(startNum, endNum) {
    console.log("startNum =", startNum);
    console.log("endNum =", endNum);
    if (startNum === endNum) {
        console.log("IF");
        return [startNum];
    } else {
        console.log("ELSE");
        let outArr = rangeOfNumbers(startNum + 1, endNum);
        outArr.unshift(startNum);
        return outArr;
    }
}

let r = rangeOfNumbers(5, 9);
console.log("Result of recursion =", r);
