/**
 * Record Collection
 * You are given an object literal representing a part of your musical album collection. 
 * Each album has a unique id number as its key and several other properties. Not all albums have complete information.
 * You start with an updateRecords function that takes an object literal, records, containing the musical album collection, 
 * an id, a prop (like artist or tracks), and a value. 
 * Complete the function using the rules below to modify the object passed to the function.
 * - Your function must always return the entire record collection object.
 * - If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
 * - If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
 * - If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
 * - If value is an empty string, delete the given prop property from the album.
 * Note: A copy of the recordCollection object is used for the tests.
 */


const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"],
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"],
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [],
    },
    5439: {
        albumTitle: "ABBA Gold",
    },
};

function updateRecords(records, id, prop, value) {
    console.log("updateRecords()");
    if (prop !== "tracks") {
        if (value !== "") {
            records[id][prop] = value;
        } else {
            delete records[id][prop];
        }
    } else {
        if (records[id].hasOwnProperty("tracks")) {
            console.log("Found tracks inside the record");
            if (value === "") {
                console.log("Found tracks inside the record | value is empty");
                delete records[id][prop];
            } else {
                console.log(
                    "Found tracks inside the record | value is not empty"
                );
                records[id][prop].push(value);
            }
        } else {
            console.log("No tracks found inside the record");
            records[id][prop] = [];
            records[id][prop].push(value);
        }
    }
    return records;
}

let result1 = updateRecords(recordCollection, 5439, "artist", "ABBA");
let result2 = updateRecords(recordCollection, 2548, "artist", "");
let result3 = updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
let result4 = updateRecords(recordCollection, 2548, "tracks", "");
let result5 = updateRecords(recordCollection, 2468, "tracks", "Free");
let result6 = updateRecords(
    recordCollection,
    1245,
    "tracks",
    "Addicted to Love"
);
let result7 = updateRecords(
    recordCollection,
    5439,
    "tracks",
    "Take a Chance on Me"
);
console.log("Result 1 =", result1);
console.log("Result 2 =", result2);
console.log("Result 3 =", result3);
console.log("Result 4 =", result4);
console.log("Result 5 =", result5);
console.log("Result 6 =", result6);
console.log("Result 7 =", result7);
