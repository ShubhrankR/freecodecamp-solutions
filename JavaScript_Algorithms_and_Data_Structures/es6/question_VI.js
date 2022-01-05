/**
 * Use getters and setters to Control Access to an Object
 */

//  class Book {
//     constructor(author) {
//       this._author = author;
//     }
//     // getter
//     get writer() {
//       return this._author;
//     }
//     // setter
//     set writer(updatedAuthor) {
//       this._author = updatedAuthor;
//     }
//   }
//   const novel = new Book('anonymous');
//   console.log(novel.writer);
//   novel.writer = 'newAuthor';
//   console.log(novel.writer);

class Thermostat {
    constructor(temperature) {
        this._temperatur = temperature;
    }

    // getter
    get temperature() {
        return (5 / 9) * (this._temperatur - 32);
    }

    // setter
    set temperature(fehTemp) {
        this._temperatur = (fehTemp * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
