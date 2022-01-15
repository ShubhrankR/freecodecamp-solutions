/**
 * Truncate a String
 * ===========================
 * Truncate a string (first argument) if it is longer than the given
 * maximum string length (second argument). Return the truncated string with a ... ending.
 * truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket...
 */

function truncateString(str, num) {
    console.log("re =", str.slice(0, num));
    console.log("re =", str);
    let newStr = "";
    if (str.length > num) {
        newStr = str.slice(0, num) + "...";
        console.log("Truncate the str =", newStr);
    } else {
        console.log("Dont");
    }
    return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
);
