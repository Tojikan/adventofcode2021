const data = require('./data.json');
let count = 0;
let lastSum = 0;

for (let d = 0; d < data.length - 2; d++){
    let sum = data[d] + data[d+1] + data[d+2];

    if (sum > lastSum && lastSum != 0)
        count++

    lastSum = sum;
}

console.log(count);