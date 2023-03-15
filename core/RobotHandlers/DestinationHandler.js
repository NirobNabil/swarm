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
}


exports.getDestination = getDestination;
exports.updatePathAccordingToPosition = updatePathAccordingToPosition;