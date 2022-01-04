/**
 * Testing Objects for Properties
 * Modify the function checkObj to test if an object passed to the function
 *  (obj) contains a specific property (checkProp). If the property is found,
 *  return that property's value. If not, return "Not Found".
 */

function checkObj(obj, checkProp) {
    console.log("The object =", obj);
    console.log("The property =", checkProp);
    if (obj.hasOwnProperty(checkProp)) {
        console.log("IF value from object = ", obj[checkProp]);
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

let valueFromFunction;
valueFromFunction = checkObj(
    { gift: "pony", pet: "kitten", bed: "sleigh" },
    "gift"
);
console.log("Answer from FUNCTION =", valueFromFunction);
