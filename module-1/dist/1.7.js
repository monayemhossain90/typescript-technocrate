"use strict";
{
    // spread operator,
    // destructuring
    // rest operator
    const arr = ["aaa", "bbb", "ccc", "ddd"];
    const [, , bestFriend, ...rest] = arr;
    console.log(...rest);
}
