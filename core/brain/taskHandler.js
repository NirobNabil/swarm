const bestPathForNewTask = require('../bestPathForNewTask')
const botStateHandler = require('../RobotHandlers/BotStateHandler')
const mapHandler= require('./mapHandler')

const addNewTaskToSystem = ( new_task ) => {

    const botStates = botStateHandler.getBotStates();
    const map = mapHandler.getMap();

    console.log("Task ", new_task.endPos);

    bestPath = []
    bestBotId = null; 
    bestBotTakenTime = 100000000000; 
    Object.keys(botStates).forEach( botId => {
        const botState = botStates[botId]
        console.log(botState);
        if( botState.curCapacity < new_task.weight ) return;
        const newPath = bestPathForNewTask.bestPath( map, botState, new_task );
        if( newPath.length < bestBotTakenTime ) {
            bestBotTakenTime = newPath.length;
            bestPath = newPath;
            bestBotId = botState.id;
        }

    } )

    if( bestBotId == null ) {
        throw new Error(" best bot not found in taskhandler ")
    }

    botStateHandler.updateBotState( bestBotId, { 
        path: bestPath, 
        curCapacity: botStates[bestBotId].curCapacity - new_task.weight,
        tasks: [...botStates[bestBotId].tasks, new_task ]
    } )

    console.log("Found best path", bestPath);

    console.log( botStateHandler.getBotState(bestBotId) )

}

exports.addNewTaskToSystem = addNewTaskToSystem;