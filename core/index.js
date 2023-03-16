//importing functions :

const grid = require('./gridMaking.js');
const {input} = require('./input');
const path = require('./shortestPath.js')
const BotStateHandler = require('./RobotHandlers/BotStateHandler')
const server = require('../core/server/index')
// const Qclass = require('./dataTypes.js');




gameBoard = grid.createBoard(input.gridLength,input.gridWidth);
grid.initShelf(input.noOfShelfs,gameBoard,input.shelfCoordinates);
grid.displayBoard(gameBoard);


server.start(4000);

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`Enter botname:`, order => {
//     console.log(order);
//     readline.close()
// })

const readline2 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline2.question(`Enter order:`, order => {
    order = order.split(' ').map( v => parseInt(v) )
    var dist = path.minDistance(gameBoard, order[0], order[1], order[2], order[3]);
    BotStateHandler.updateBotState('robot1', {path: dist});
    // console.log(dist);
    readline2.close();
});


