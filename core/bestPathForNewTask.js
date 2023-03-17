const allPermutations = require('./allPermutations.js');
const shortestPath = require('./shortestPath.js');


// gameBoard,
//     {
//         tasks: [
//             {
//                 initPos: {x: 5, y: 6},
//                 endPos: {x: 6, y: 9}
//             },
//             {
//                 initPos: {x: 5, y: 6},
//                 endPos: {x: 10, y: 10}
//             },
//             {
//                 initPos: {x: 5, y: 6},
//                 endPos: {x: 10, y: 10}
//             },
//         ], 
//         curPos: {
//             x: 5,
//             y: 1
//         }
//     },
//     {
//         initPos: { x: 0, y: 0 },
//         endPos: {x: 5, y: 6}
//     }

const bestPath = (gameBoard,botState,newTask) => {
    // console.log(prevTasks);
    
    var curTasks = [...botState.tasks, newTask];
    var permutations = allPermutations.getCombos(curTasks.map( (t, i) => i ),curTasks.length);
    
    //console.log(permutation);
    var basePath = shortestPath.minDistance(
        gameBoard,
        botState.curPos.x,
        botState.curPos.y,
        newTask.initPos.x,
        newTask.initPos.y
    );
    
    //console.log(path);
    var optimalPath =[];
    var tempPath =[];
    var pathLength = 100000;


    for(var i=0; i<permutations.length; i++)
    {
        tempPath = []
        var curPermutation = permutations[i];
        //console.log("line1", botState.tasks[num].endPos.x,botState.tasks[num].endPos.y);
        // var  = shortestPath.minDistance(gameBoard,newTask.initPos.x,newTask.initPos.y,botState.tasks[num].endPos.x,botState.tasks[num].endPos.y);
        //console.log("line2", tempPath);
        var curPos = newTask.initPos;
        for( let j=0; j<curPermutation.length; j++ ) {
            let nextTask = curTasks[curPermutation[j]]
            console.log("Task ", nextTask.endPos);

            // console.log("tempPath", tempPath)
            // console.log(curPos.x,
            //     curPos.y,
            //     nextTask.endPos.x,
            //     nextTask.endPos.y)
            const gg = shortestPath.minDistance(
                gameBoard,
                curPos.x,
                curPos.y,
                nextTask.endPos.x,
                nextTask.endPos.y                 
            );
            // console.log("gg", gg);
            if( gg == -1 ) {
                throw new Error(" shortestpath returned -1 because destination not reachable ");
            }
            tempPath = [ ...tempPath, ...gg ]
            curPos = nextTask.endPos;
        }
        // tempPath = shortestPath(gameBoard,curPos[0],curPos[1], )
        // var curPos = [newTask[2],newTask[3]];
        // var curPath = permutation[i];

        if( tempPath.length < pathLength ) {
            optimalPath = [...tempPath];
            pathLength = optimalPath.length;
        }

    }

    return [...basePath,...optimalPath];
  };


exports.bestPath = bestPath;