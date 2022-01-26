/**
 * Find the Longest Word in a String
 */

function findLongestWordLength(str) {
    let splitedArr = str.split(" ");
    let largestWordLength = splitedArr[0].length;
    let largestWord = splitedArr[0];
    let i = 0;
    while (i < splitedArr.length) {
        if (splitedArr[i].length > largestWordLength) {
            largestWordLength = splitedArr[i].length;
            largestWord = splitedArr[i];
        }
        i++;
    }
    return largestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
