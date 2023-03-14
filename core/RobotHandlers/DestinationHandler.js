const botStateHandler = require('./BotStateHandler')

const getDestination = (botId) => {
    const botState = botStateHandler.getBotState(botId)
    if( botState.path.length == 0 ) return { x: -1, y: -1 }
    else return { x: path[0][0], y: path[0][1] };
}

const updatePathAccordingToPosition = (botId, position) => {
    const destination = getDestination(botId);
    if( checkPositionEqual(destination, position) ) {
        botStateHandler.updateBotState(botId, {
            path: botStateHandler.getBotState().path.slice(1)  // remove the next entry from path
        })
    }
}


exports.getDestination = getDestination;
exports.updatePathAccordingToPosition = updatePathAccordingToPosition;