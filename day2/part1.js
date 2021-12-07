const data = require('./data.json');



function submarine(data){
    let horizontal = 0;
    let depth = 0;


    for (const comm of data){
        const command = comm.split(' ');
        let val = parseInt(command[1], 10) || 0;

        switch(command[0]){
            case 'forward':
                horizontal += val;
                break;
            case 'down':
                depth += val;
                break;
            case 'up':
                depth -= val;
                break;
        }
    }

    return (horizontal * depth);

}

console.log(submarine(data));