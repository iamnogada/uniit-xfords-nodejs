const inputParams = require("./data/input");
const querySet = require("./data/sql");

console.log(JSON.stringify(inputParams));
console.log(JSON.stringify(querySet));

// for (const key in querSet) {
//     querySet[key].
// }

var replacements = { name: "Mike", age: "26", event: "20" },
    str = "My Name is #{name} and my age is #{age}.#{event} at #{name}";

str = str.replace(/#{\w+}/g, function(all) {
    let key = all.substr(2,all.length-3)
    return replacements[key] || all;
});

console.log(str);
