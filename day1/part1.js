

const data = require('./data.json');
let count = 0;

for (let d = 1; d <= data.length; d++){
    if (data[d] > [data[d - 1]])
        count++;
}

console.log(count);