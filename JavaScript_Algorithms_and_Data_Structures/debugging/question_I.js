/**
 * Use Caution When Reinitializing Variables Inside a Loop
 * ========================================================
 * The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes.
 * Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized
 * (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes,
 * which looks like [[0, 0], [0, 0], [0, 0]].
 *
 * Conditions to meet
 * ====================
 * - Your code should set the matrix variable to an array holding 3 rows of 2 columns of zeroes each.
 * - The matrix variable should have 3 rows.
 * - The matrix variable should have 2 columns in each row.
 * - zeroArray(4,3) should return an array holding 4 rows of 3 columns of zeroes each.
 */

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    console.log('rows =', m);
    console.log('columns =', n);
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        console.log('First loop =', i);
        row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            console.log('second loop =', j);
            row.push(0);
            console.log('Row right now =', row);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
