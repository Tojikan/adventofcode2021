const numbers = [93,18,74,26,98,52,94,23,15,2,34,75,13,31,39,76,96,16,84,12,38,27,8,85,86,43,4,79,57,19,40,59,14,21,35,0,90,11,32,17,78,83,54,42,66,82,99,45,55,63,24,5,89,46,80,49,3,48,67,47,50,60,81,51,71,33,72,6,9,30,56,20,77,29,28,69,25,36,91,92,65,22,62,58,64,88,10,7,87,41,44,37,73,70,68,97,61,95,53,1];
const boardsData = require('./boards2.json');

// const numbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];
// const boardsData = [
//     [
//     [22, 13, 17, 11 , 0],
//     [8, 2, 23,  4 ,24],
//     [21,  9, 14, 16 , 7],
//     [6, 10,  3, 18 , 5],
//     [1, 12, 20, 15 ,19],
//     ],

//     [
//     [3  ,15,  0, 2 ,22],
//     [9  ,18, 13,17 , 5],
//     [19 , 8,  7,25 ,23],
//     [20 ,11, 10,24 , 4],
//     [14 ,21, 16,12 , 6]
//     ],
//     [
//     [14, 21, 17, 24,  4],
//     [10, 16, 15,  9, 19],
//     [18,  8, 23, 26, 20],
//     [22, 11, 13,  6,  5],
//     [2 , 0 , 12,  3,  7]
//     ]
// ]


const markNumberAndCheck = function(board, x){
    for (let row = 0; row < board.length; row++){
        
        let rowCheck = true;
        for (let col = 0; col < board[row].length; col++){
            if (board[row][col] == x){
                board[row][col] = 'x';
            }
            
            //Check the full row while we're here
            //if any number is integer, then not passed
            if (Number.isInteger(board[row][col])){
                rowCheck = false;
            }
            
            
            //Do the same for all other rows in this column
            let colCheck = true; 
            for (let row2 = 0; row2 < board.length; row2++){
                if (Number.isInteger(board[row2][col])){
                    colCheck = false;
                }
            }
            //check has to be right before/afterloop
            if (colCheck){
                return true;
            }
            
        }
        
        //end loop early if passed
        if (rowCheck){
            return true;
        }
    }
    return false;
}

const sumRemainingValues = function(board){
    let sum = 0;
    for (row of board){
        for (col of row){

            if (Number.isInteger(col)){
                sum += col;
            }
        }
    }

    return sum;
}


for (let num of numbers){
    for (let board of boardsData){
        let result = markNumberAndCheck(board, num);

        if (result){
            console.log(boardsData);
            console.log(num);
            let sum = sumRemainingValues(board)
            console.log(sum);
            console.log(sum * num)
            console.log(board);
            return;
        }
    }
}
