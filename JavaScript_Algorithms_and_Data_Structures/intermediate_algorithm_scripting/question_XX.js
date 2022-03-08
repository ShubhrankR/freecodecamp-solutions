/**
 * Make a Person
 * ===============
 * Fill in the object constructor with the following methods below:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 *
 * Run the tests to see the expected output for each method. The methods
 * that take an argument must accept only one argument and it has to be a string.
 * These methods must be the only available means of interacting with the object.
 *
 * Hints -
 * -------
 * - https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-make-a-person/16020
 *
 */

const Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };
    this.getLastName = function () {
        return fullName.split(" ")[1];
    };
    this.getFullName = function () {
        return fullName;
    };
    this.setFirstName = function (fs) {
        fullName = fs + " " + fullName.split(" ")[1];
    };
    this.setLastName = function (ls) {
        fullName = fullName.split(" ")[0] + " " + ls;
    };
    this.setFullName = function (fn) {
        fullName = fn;
    };
};

const bob = new Person("Bob Ross");
bob.getFullName();
