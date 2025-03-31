console.log("hello world")

const years = 1
const days = years * 365
const hours = days * 24
const minutes = hours * 60

console.log("There are " + minutes + " minutes in a year")

// note: these three ways of writing functions are (mostly) equivalent

// function example_function(a, b) {
//     return a + b;
// }

// const example_function = function(a, b) {
//     return a + b;
// }

const example_function = (a, b) => {
    return a + b;
}

console.log(example_function(2, 4))