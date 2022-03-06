/**
 * Caesars Cipher
 * ================
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the
 * letters are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the
 * letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on
 *
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string
 * All letters will be uppercase. Do not transform any non-alphabetic character
 * (i.e. spaces, punctuation), but do pass them on
 *
 * AC -
 * ----------
 * rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
 * rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
 * rot13("SERR YBIR?") should decode to the string FREE LOVE?
 * rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
 *
 *
 */

// (function () {
//     const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const capAlphaArr = capitalAlphabets.split("");
//     for (let i of capAlphaArr) {
//         console.log(`Char ${i} -`, i.codePointAt());
//     }
// })();

function rot13(str) {
    let spliteStringArr = str.split("");
    let resultStringArr = [];
    // console.log("Splited String -", spliteStringArr);
    spliteStringArr.forEach((e) => {
        if (e.charCodeAt() >= 65 || e.charCodeAt <= 90) {
            if (e.charCodeAt() === 32) {
                // console.log("Its a white space");
                resultStringArr.push(String.fromCharCode(32));
            } else {
                // console.log(`Element ${e} char code -`, e.charCodeAt() + 13);
                if (e.charCodeAt() + 13 > 90) {
                    const charDiff = e.charCodeAt() + 13 - 90;
                    resultStringArr.push(String.fromCharCode(64 + charDiff));
                } else {
                    resultStringArr.push(
                        String.fromCharCode(e.charCodeAt() + 13)
                    );
                }
            }
        } else {
            resultStringArr.push(e);
        }
        // console.log(`Element ${e} char code -`, e.charCodeAt());
        // console.log(`Element ${e} char code -`, e.charCodeAt() + 13);
        // console.log(
        //     `Element ${e} char code -`,
        //     String.fromCharCode(e.charCodeAt() + 13)
        // );
    });
    // console.log("Result =", resultStringArr.join(""));
    return resultStringArr.join("");
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
