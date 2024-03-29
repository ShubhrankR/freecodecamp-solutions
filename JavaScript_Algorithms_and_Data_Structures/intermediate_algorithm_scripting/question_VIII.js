/**
 * DNA Pairing
 * =================
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 *
 * AC -
 * -------------
 * pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
 * pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
 * pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
 */

function pairElement(str) {
    const splitedStringArr = str.split("");
    console.log("Splited arr =", splitedStringArr);
    let dnaStrands = [];
    splitedStringArr.forEach((element) => {
        let tempArr = [];
        switch (element) {
            case "G":
                tempArr = ["G"].concat(["C"]);
                break;
            case "C":
                tempArr = ["C"].concat(["G"]);
                break;
            case "A":
                tempArr = ["A"].concat(["T"]);
                break;
            case "T":
                tempArr = ["T"].concat(["A"]);
                break;
            default:
                console.log("Default Switch Case");
        }
        dnaStrands.push(tempArr);
    });
    console.log("Result =", dnaStrands);
    return dnaStrands;
}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");
