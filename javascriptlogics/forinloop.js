const { parseArgs } = require("util");

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
console.log(parseInt(a)+person.age);