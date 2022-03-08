/**
 * Telephone Number Validator
 * ==========================
 * Return true if the passed string looks like a valid US phone number.
 *
 * The user may fill out the form field any way they choose as long as
 * it has the format of a valid US number. The following are examples
 * of valid formats for US numbers (refer to the tests below for other variants):
 * <pre>
	555-555-5555
	(555)555-5555
	(555) 555-5555
	555 555 5555
	5555555555
	1 555 555 5555
</pre>
 *
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
 * Your job is to validate or reject the US phone number based on any combination of the formats
 * provided above. The area code is required. If the country code is provided, you must confirm that
 * the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
 *
 * Hints -
 * --------
 * - https://www.freecodecamp.org/news/a-walkthrough-of-the-freecodecamp-telephone-validator-project/
 * - https://codepen.io/pie9/pen/Rwwjdvd
 * - https://www.regexpal.com/
 * - https://github.com/yazeedb/FCC-Algos-and-DS-Solutions
 * - https://www.youtube.com/watch?v=t6Yr2PBmwC0
 */

function telephoneCheck(str) {
    var result = false;
    var formats = [
        /^\d\d\d\d\d\d\d\d\d\d$/, // 5555555555
        /^\d\d\d-\d\d\d-\d\d\d\d/, // 555-555-5555
        /^\d\d\d\s\d\d\d\s\d\d\d\d/, // 555 555 5555
        /^\(\d\d\d\)\d\d\d-\d\d\d\d/, // (555)555-5555
        /^\(\d\d\d\)\s\d\d\d-\d\d\d\d/, // (555) 555-5555
        /^1\d\d\d\d\d\d\d\d\d\d/, // 15555555555
        /^1\s\d\d\d\s\d\d\d\s\d\d\d\d/, // 1 555 555 5555
        /^1\s\d\d\d-\d\d\d-\d\d\d\d/, // 1 555-555-5555
        /^1\(\d\d\d\)\d\d\d-\d\d\d\d/, // 1(555)555-5555
        /^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/, // 1 (555) 555-5555
    ];

    result = formats.some((reg) => reg.test(str));

    return result;
}

telephoneCheck("555-555-5555");
