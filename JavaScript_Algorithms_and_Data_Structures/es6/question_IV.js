/**
 * Create Strings using Template Literals
 */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
    let i = 0;
    const failureItems = [];
    while (i < arr.length) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
        i++;
    }
    return failureItems;
}

const failuresList = makeList(result.failure);
console.log('Result =', failuresList);