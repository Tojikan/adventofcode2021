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


function findBit(arr, col, mostCommon = true){
    let sum = arr.reduce((prev, curr)=>{
        return prev += parseInt(curr.charAt(col), 10);
    }, 0);

    if (sum > arr.length / 2){
        return (mostCommon) ? '1' : '0';
    } else if (sum == arr.length / 2) {
        return (mostCommon) ? '1' : '0';
    } else {
        return (mostCommon) ? '0' : '1';
    }
}

let oxydata = data;
let co2data = data;

let oxyrate;
let co2rate;

for (let col = 0; col < data[0].length; col++){
    let oxybit = findBit(oxydata, col);
    let co2bit = findBit(co2data, col, false);
    oxydata = oxydata.filter(x => x.charAt(col) == oxybit);
    co2data = co2data.filter(x => x.charAt(col) == co2bit);


    if (oxydata.length == 1){
        oxyrate = oxydata[0];
    }

    if (co2data.length == 1){
        co2rate = co2data[0];
    }
}

console.log(oxyrate);
console.log(co2rate);

console.log(parseInt(oxyrate, 2) * parseInt(co2rate,2));