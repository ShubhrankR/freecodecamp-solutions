/**
 * Pig Latin
 * ============
 *
 * Pig Latin is a way of altering English Words.
 * The rules are as follows:
 * - If a word begins with a consonant, take the first consonant or consonant cluster,
 * move it to the end of the word, and add "ay" to it.
 * - If a word begins with a vowel, just add "way" at the end.
 *
 * Q - Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 *
 * AC -
 * ---------
 * translatePigLatin("california") should return the string aliforniacay
 * translatePigLatin("paragraphs") should return the string aragraphspay
 * translatePigLatin("glove") should return the string oveglay
 * translatePigLatin("algorithm") should return the string algorithmway
 * translatePigLatin("eight") should return the string eightway
 * Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway
 * Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay
 */

// function translatePigLatin(str) {
//     let returnWord = "";
//     const originalWord = str;
//     const splitedAlphabetsArr = str.split("");
//     let consonantClusterArr = [];
//     const checkVowel = function (character) {
//         return (
//             character === "a" ||
//             character === "e" ||
//             character === "i" ||
//             character === "o" ||
//             character === "u"
//         );
//     };
//     // splitedAlphabetsArr.forEach((element) => {
//     // if (checkVowel(element)) {
//     //     returnWord = originalWord + 'way';
//     //     break;
//     // } else {
//     //     consonantClusterArr.push(element);
//     // }
//     // });
//     if (checkVowel(splitedAlphabetsArr[0])) {
//         returnWord = originalWord + "way";
//         return returnWord;
//     }
//     // consonantClusterArr = splitedAlphabetsArr.filter((e) => checkVowel(e));
//     let i = 0;
//     while (i < splitedAlphabetsArr.length) {
//         // console.log("splitedAlphabetsArr while =", splitedAlphabetsArr);
//         if (checkVowel(splitedAlphabetsArr[i])) {
//             // console.log("splitedAlphabetsArr while IF =", splitedAlphabetsArr);
//             break;
//         } else {
//             // console.log("splitedAlphabetsArr while ELSE =", splitedAlphabetsArr);
//             consonantClusterArr.push(splitedAlphabetsArr[i]);
//             // consonantClusterArr = splitedAlphabetsArr.splice(i, 1);
//         }
//         i++;
//     }
//     // console.log(
//     //     "Some -",
//     //     splitedAlphabetsArr.some((e) => checkVowel(e))
//     // );
//     const mutatedArr = splitedAlphabetsArr.splice(i);
//     returnWord = mutatedArr.join("") + consonantClusterArr.join("") + "ay";
//     return returnWord;
// }

// Optimised code: Iteration 1 ---------------------------------------------------------------------
// function translatePigLatin(str) {
//     let returnWord = "";
//     const originalWord = str;
//     const splitedAlphabetsArr = str.split("");
//     let consonantClusterArr = [];
//     const checkVowel = function (character) {
//         return (
//             character === "a" ||
//             character === "e" ||
//             character === "i" ||
//             character === "o" ||
//             character === "u"
//         );
//     };
//     const firstVowelIndex = splitedAlphabetsArr.findIndex((e) => checkVowel(e));
//     console.log('find index =', firstVowelIndex);
//     if (firstVowelIndex < 0) {
//         returnWord = originalWord + "ay";
//         return returnWord;
//     }
//     if (checkVowel(splitedAlphabetsArr[0])) {
//         returnWord = originalWord + "way";
//         return returnWord;
//     }
//     // let i = 0;
//     // while (i < splitedAlphabetsArr.length) {
//     //     if (checkVowel(splitedAlphabetsArr[i])) {
//     //         break;
//     //     } else {
//     //         consonantClusterArr.push(splitedAlphabetsArr[i]);
//     //     }
//     //     i++;
//     // }
//     const mutatedArr = splitedAlphabetsArr.splice(firstVowelIndex);
//     // const mutatedArr = splitedAlphabetsArr.splice(i);
//     console.log('splited arr =', splitedAlphabetsArr)
//     // returnWord = mutatedArr.join("") + consonantClusterArr.join("") + "ay";
//     returnWord = mutatedArr.join("") + splitedAlphabetsArr.join("") + "ay";
//     return returnWord;
// }

// Optimised code: Iteration 2 ---------------------------------------------------------------------
function translatePigLatin(str) {
    const originalWord = str;
    const splitedAlphabetsArr = str.split("");
    const checkVowel = function (character) {
        return (
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u"
        );
    };
    const firstVowelIndex = splitedAlphabetsArr.findIndex((e) => checkVowel(e));
    if (firstVowelIndex < 0) return originalWord + "ay";
    if (checkVowel(splitedAlphabetsArr[0])) return originalWord + "way";
    const mutatedArr = splitedAlphabetsArr.splice(firstVowelIndex);
    return mutatedArr.join("") + splitedAlphabetsArr.join("") + "ay";
}

// const r = translatePigLatin("consonant");
// const r = translatePigLatin("california");
const r = translatePigLatin("paragraphs");
// const r = translatePigLatin("glove");
// const r = translatePigLatin("algorithm");
// const r = translatePigLatin("eight");
// const r = translatePigLatin("schwartz");
// const r = translatePigLatin("rhythm");
console.log("Result =", r);
