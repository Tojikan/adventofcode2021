const data = require('./data.json');

// const data = [
//     "00100",
//     "11110",
//     "10110",
//     "10111",
//     "10101",
//     "01111",
//     "00111",
//     "11100",
//     "10000",
//     "11001",
//     "00010",
//     "01010",
// ]

const dataLen = data.length;
let gamma = '';
let epsilon = '';

for (let col = 0; col < data[0].length; col++){
    let sum = data.reduce((prev, curr)=>{
        return prev += parseInt(curr.toString().charAt(col), 10);
    }, 0);

    //if more than half, then you know its most common because binary
    if (sum > dataLen/2){
        gamma += "1";
        epsilon += "0";
    } else {
        gamma += "0";
        epsilon += "1";
    }
}

console.log(parseInt(gamma, 2) * parseInt(epsilon,2));