const process = require('process')
var data = [];

for (let i = 0; i < 5000; i++) {
    data[i] = "aslhahahahahah" + i;
}

var start, end;

// start = new Date().getTime();
start = process.hrtime()
data.forEach(element => {
    element.replace("ha", "la");
});
end = process.hrtime()
console.log(`Duration of foreach process: ${(end[0]-start[0])*1000+(end[1]-start[1])/1000000}`);

start = process.hrtime()
for (const key in data) {
    data[key].replace("la", "ha");
}
end = process.hrtime()
console.log(`Duration of forin process: ${(end[0]-start[0])*1000+(end[1]-start[1])/1000000}`);

start = process.hrtime()
for (const it of data) {
    it.replace("ha", "ka");
    
}
end = process.hrtime()
console.log(`Duration of forin process: ${(end[0]-start[0])*1000+(end[1]-start[1])/1000000}`);
