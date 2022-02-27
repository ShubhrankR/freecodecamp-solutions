/**
 * Convert HTML Entities
 * =======================
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 *
 * AC -
 * -----------
 * - convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana
 * - convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos
 * - convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve
 * - convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;
 * - convertHTML("Schindler's List") should return the string Schindler&apos;s List
 * - convertHTML("<>") should return the string &lt;&gt;
 * - convertHTML("abc") should return the string abc
 *
 * Hints -
 * -----------
 * - https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters
 * - https://www.w3schools.com/html/html_entities.asp
 * - https://www.toptal.com/designers/htmlarrows/punctuation/ampersand/
 * - https://developer.mozilla.org/en-US/docs/Glossary/Entity
 * - https://stackoverflow.com/questions/5796718/html-entity-decode
 */

// & = &amp;
// < = &lt;
// > = &gt;
// " = &quot;
// ' = &apos;

function convertHTML(str) {
    const specialChars = /[&<>'"]/;
    let resultStr = "";
    // console.log("Index of -", str.indexOf("&"));
    // console.log("Replace str -", str.replace(specialChars, "&amp"));
    // console.log("match str -", str.match(specialChars));
    // console.log("match str -", str.match(specialChars)[0]);
    if (specialChars.test(str)) {
        for (let i of str) {
            switch (i) {
                case "&":
                    resultStr += "&amp;";
                    break;
                case "<":
                    resultStr += "&lt;";
                    break;
                case ">":
                    resultStr += "&gt;";
                    break;
                case '"':
                    resultStr += "&quot;";
                    break;
                case "'":
                    resultStr += "&apos;";
                    break;
                default:
                    resultStr += i;
            }
        }
        // switch (str.match(specialChars)[0]) {
        //     case "&":
        //         resultStr = str.replaceAll("&", "&amp;");
        //         break;
        //     case "<":
        //         resultStr = str.replaceAll("<", "&lt;");
        //         break;
        //     case ">":
        //         resultStr = str.replaceAll(">", "&gt;");
        //         break;
        //     case '"':
        //         resultStr = str.replaceAll('"', "&quot;");
        //         break;
        //     case "'":
        //         resultStr = str.replaceAll("'", "&apos;");
        //         break;
        //     default:
        //         resultStr = str;
        // }
    } else {
        resultStr = str;
    }
    console.log("Result -", resultStr);
    return resultStr;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");
