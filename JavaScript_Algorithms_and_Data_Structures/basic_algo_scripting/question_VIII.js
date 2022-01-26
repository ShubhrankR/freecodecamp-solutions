/**
 * Title Case a Sentence
 * ==========================
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like the and of.
 *
 * Criteria -
 * titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
 * titleCase("sHoRt AnD sToUt") should return the string Short And Stout
 * titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout
 * Help - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088
 */

function titleCase(str) {
    let strArr = str.split(" ");
    let anotherArr = [];
    for (let s of strArr) {
        anotherArr.push(s.toLowerCase().replace(/\b[a-zA-Z]/, (n) => n.toUpperCase()));
    }
    return anotherArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
