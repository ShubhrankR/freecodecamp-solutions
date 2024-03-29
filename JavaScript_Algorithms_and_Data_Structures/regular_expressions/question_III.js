/**
 * Restrict Possible Usernames
 * -----------------------------
 * Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
 * You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
 * Usernames can only use alpha-numeric characters.
 * The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
 * Username letters can be lowercase and uppercase.
 * Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
 * Cases that your code should pass -
Your regex should match the string JACK

Your regex should not match the string J

Your regex should match the string Jo

Your regex should match the string Oceans11

Your regex should match the string RegexGuru

Your regex should not match the string 007

Your regex should not match the string 9

Your regex should not match the string A1

Your regex should not match the string BadUs3rnam3

Your regex should match the string Z97

Your regex should not match the string c57bT3

Your regex should match the string AB1

Your regex should not match the string J%4
 */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi; // Change this line
let result = userCheck.test(username);

/**
 * Positive and Negative Lookahead
 */
let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

/**
 * Remove Whitespace from Start and End
 * Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
 */

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line