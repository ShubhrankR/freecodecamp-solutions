/**
 * Search and Replace
 * =======================
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 * AC -
 * -----------
 * myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall
 * myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch
 * myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there
 * myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error
 * myReplace("His name is Tom", "Tom", "john") should return the string His name is John
 * myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms
 *
 * Refs -
 * ===========
 * - https://stackoverflow.com/questions/8334606/check-if-first-letter-of-word-is-a-capital-letter
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 * 
 */

function myReplace(str, before, after) {
    let afterCapitalized = "";
    let outPutString = "";
    let isCapital = /^[A-Z]/.test(before); // Check if before word starts with a capital letter
    if (isCapital) {
        afterCapitalized = after[0].toUpperCase() + after.slice(1);
        outPutString = str.replace(before, afterCapitalized);
        console.log("Result =", outPutString);
        return outPutString;
    } else {
        afterCapitalized = after.toLowerCase();
        outPutString = str.replace(before, afterCapitalized);
        console.log("Result =", outPutString);
        return outPutString;
    }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("I think we should look up there", "up", "Down");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
