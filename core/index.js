//importing functions :

const grid = require('./gridMaking.js');
const {input} = require('./input');
console.log(input);
const path = require('./shortestPath.js')
// const Qclass = require('./dataTypes.js');



gameBoard = grid.createBoard(input.gridLength,input.gridWidth);
grid.initShelf(input.noOfShelfs,gameBoard,input.shelfCoordinates);
grid.displayBoard(gameBoard);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Enter order:`, order => {
    order = order.split(' ').map( v => parseInt(v) )
    var dist = path.minDistance(gameBoard, order[0], order[1], order[2], order[3]);
    console.log(dist);
    readline.close();
});


