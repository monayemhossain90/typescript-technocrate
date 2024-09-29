"use strict";
// function with generic
const createArray = (params) => {
    return [params];
};
const arr1 = createArray("hello");
const arr2 = createArray(true);
const arr3 = createArray(1);
console.log(arr1, arr2, arr3);
