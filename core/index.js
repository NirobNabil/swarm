//importing functions :

const grid = require('./gridMaking.js');
const {input} = require('./input');
const path = require('./shortestPath.js')
const BotStateHandler = require('./RobotHandlers/BotStateHandler')
const server = require('../core/server/index')
const allPermutations = require('./allPermutations.js');
const bestPathForNewTask = require('./bestPathForNewTask')
const ShelfHandler = require('./RobotHandlers/ShelfHandler')
const map = require( './brain/mapHandler' )
// const allcombinations = require('./allcombinations.js');
// const Qclass = require('./dataTypes.js');

// const BotStateHandler = require('./RobotHandlers/BotStateHandler')
// const Qclass = require('./dataTypes.js');`




map.create(20,20);
map.initShelves(ShelfHandler.getShelves());
map.display();

const gameBoard = map.getMap();
// var dist = path.minDistance(gameBoard,0,0,0,8);
// console.log(dist);

//bestpath(prevTaskIds,currentPos,newTaskToAdd)
// var newPath = bestPathForNewTask.bestPath(
//     gameBoard,
//     {
//         tasks: [
//             {
//                 initPos: {x: 5, y: 6},
//                 endPos: {x: 6, y: 9}
//             },
//             {
//                 initPos: {x: 5, y: 6},
//                 endPos: {x: 8, y:4 }
//             }
//         ], 
//         curPos: {
//             x: 5,
//             y: 1
//         }
//     },
//     {
//         initPos: { x: 0, y: 0 },
//         endPos: {x: 5, y: 6}
//     });
// console.log(newPath);

//premutations:
// const combos = allPermutations.getCombos([1, 2,3], 3);
// console.log(combos);

server.start(4001);

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`Enter botname:`, order => {
//     console.log(order);
//     readline.close()
// })

// const readline2 = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline2.question(`Enter order:`, order => {
//     order = order.split(' ').map( v => parseInt(v) )
//     var dist = path.minDistance(gameBoard, order[0], order[1], order[2], order[3]);
//     BotStateHandler.updateBotState('robot1', {path: dist});
//     // console.log(dist);
//     readline2.close();
// });




