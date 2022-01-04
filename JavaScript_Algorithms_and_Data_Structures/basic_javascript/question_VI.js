/**
 * Profile Lookup
 */
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    let r = "";
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                console.log("No prop");
                r = "No such property";
            }
        } else {
            console.log("No contact");
            if (r !== "") {
                console.log("r has something");
            } else {
                r = "No such contact";
            }
        }
    }
    return r;
}

let result1 = lookUpProfile("Akira", "likes");
let result2 = lookUpProfile("Kristian", "lastName");
let result3 = lookUpProfile("Sherlock", "likes");
let result4 = lookUpProfile("Harry", "likes");
let result5 = lookUpProfile("Bob", "number");
let result6 = lookUpProfile("Bob", "potato");
let result7 = lookUpProfile("Akira", "address");
console.log("Profile lookup result =", result1);
