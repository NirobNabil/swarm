const botStateHandler = require('./BotStateHandler')
const { checkPositionEqual } = require('./util')

const getDestination = (botId) => {
    const botState = botStateHandler.getBotState(botId);
    // console.log(botState)
    if( botState.path.length == 0 ) return { x: -1, y: -1 }
    else return { ...botState.path[0] };
}

const updatePathAccordingToPosition = (botId) => {
    const destination = getDestination(botId);
    const position = botStateHandler.getBotState(botId).curPos;
    if( checkPositionEqual(destination, position) ) {
        botStateHandler.updateBotState(botId, {
            path: botStateHandler.getBotState(botId).path.slice(1)  // remove the next
        })
    }

    const botState = botStateHandler.getBotState(botId);
    for( let i=0; i<botState.tasks.length; i++ ) {
        const task = botState.tasks[i];
        // console.log(task.endPos, position);
        if( 
            checkPositionEqual( {...task.endPos, y:task.endPos.y-1}, position )
        ||  checkPositionEqual( {...task.endPos, y:task.endPos.y+1}, position )
        ||  checkPositionEqual( {...task.endPos, x:task.endPos.x-1}, position )
        ||  checkPositionEqual( {...task.endPos, x:task.endPos.x+1}, position )
        ) {
            botState.curCapacity += botState.tasks[i].weight;
            botState.tasks = [...botState.tasks.slice(0,i), ...botState.tasks.slice(i+1)];
            // console.log(botState.tasks);
            break;
        }
    }
    botStateHandler.updateBotState( botId, { ...botState } )
}


exports.getDestination = getDestination;
exports.updatePathAccordingToPosition = updatePathAccordingToPosition;