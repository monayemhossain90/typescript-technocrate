{

    // ternary operator

    let isAdult = 20;

const result = isAdult >=18? "Adult" : "Not Adult";
console.log(result)

// nullish operator and coalescing operator

const isAuthenticate = undefined;

const result1 = isAuthenticate??"Guest";
const result2 = isAuthenticate? isAuthenticate:"Guest";

console.log({result1},{result2})


}