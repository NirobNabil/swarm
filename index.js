//importing functions :

const grid = require('./gridMaking.js');
const {input} = require('./input');
console.log(input);
const path = require('./shortestPath.js')
const allPermutations = require('./allPermutations.js');
// const allcombinations = require('./allcombinations.js');
// const Qclass = require('./dataTypes.js');


gameBoard = grid.createBoard(input.gridLength,input.gridWidth);
grid.initShelf(input.noOfShelfs,gameBoard,input.shelfCoordinates);
grid.displayBoard(gameBoard);
var dist = path.minDistance(gameBoard,0,0,0,8);
console.log(dist);
//premutations:
const combos = allPermutations.getCombos([1, 2,3], 3);
// console.log(combos);



// const combinations = allcombinations.getCombinations([1, 2, 3], 3);
// console.log(combinations);

