/**
 * Create complex multi-dimensional arrays
 * =========================================
 * We have defined a variable, myNestedArray, set equal to an array.
 * Modify myNestedArray, using any combination of strings, numbers, and
 * booleans for data elements, so that it has exactly five levels of depth
 * (remember, the outer-most array is level 1). Somewhere on the third level,
 * include the string deep, on the fourth level, include the string deeper,
 * and on the fifth level, include the string deepest.
 */

let nestedArray = [
    ["deep"],
    [["deeper"], ["deeper"]],
    [[["deepest"], ["deepest"]], [[["deepest-est?"]]]],
];

let myNestedArray = [
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
    // change code above this line
];

let myNestedArray = [
    // Only change code below this line
    "level 1" /* myNestedArray[0]             */,
    ["level 2"] /* myNestedArray[1][0]          */,
    [["level 3", "deep"]] /* myNestedArray[2][0][0]       */,
    [[["level 4", "deeper"]]] /* myNestedArray[3][0][0][0]    */,
    [[[["level 5", "deepest"]]]] /* myNestedArray[4][0][0][0][0] */,
    // Only change code above this line
];

let myNestedArray = [
    // Only change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    [
        "deep",
        ["loop", "shift", 6, 7, 1000, "deeper"],
        ["loop", "shift", 6, 7, 1000, "deeper"],
    ],
    [
        [
            ["concat", false, true, "spread", "array"],
            ["concat", false, true, "spread", "array"],
        ],
        [
            ["loop", "shift", 6, 7, 1000, "method"],
            ["concat", false, true, "spread", "deep"],
            ["concat", false, true, "spread", "deep"],
        ],
        [
            ["loop", "shift", 6, 7, 1000, "deeper"],
            ["loop", "shift", 6, 7, 1000, "deeper"],
            ["loop", "shift", 6, 7, 1000, "deeper"],
            ["loop", "shift", 6, 7, 1000, "deeper"],
        ],
    ],
    [
        ["mutate", 1327.98, "splice", "slice", "push"],
        ["mutate", 1327.98, "splice", "slice", "push"],
        ["mutate", 1327.98, "splice", "slice", "push"],
        ["mutate", 1327.98, "splice", "slice", "push"],
    ],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
    // Only change code above this line
];
