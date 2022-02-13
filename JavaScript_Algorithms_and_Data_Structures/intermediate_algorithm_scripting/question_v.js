/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * AC -
 * --------------
 * spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap
 * spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap
 * spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show
 * spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh
 * spinalCase("AllThe-small Things") should return the string all-the-small-things
 *
 * Hint - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-spinal-tap-case/16078
 */

// Mine
function spinalCase(str) {
    return str;
}

spinalCase("This Is Spinal Tap");

// Solution 1
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");

// Solution 2
function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join("-");
}

// test here
spinalCase("This Is Spinal Tap");

// Solution 3
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}
