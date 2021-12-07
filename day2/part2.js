const data = require('./data.json');



function submarine(data){
    let horizontal = 0;
    let depth = 0;
    let aim = 0;


    for (const comm of data){
        const command = comm.split(' ');
        let val = parseInt(command[1], 10) || 0;

        switch(command[0]){
            case 'forward':
                horizontal += val;
                depth += (aim * val);
                break;
            case 'down':
                aim += val;
                break;
            case 'up':
                aim -= val;
                break;
        }
    }

    return (horizontal * depth);

}

console.log(submarine(data));