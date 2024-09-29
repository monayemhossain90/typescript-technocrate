"use strict";
// object --> function --> method
const poorUser = {
    name: "monayem",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const arr = [1, 2, 3, 4];
const newArr = arr.map((element) => element * element);
