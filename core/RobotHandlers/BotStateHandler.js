const defaultBotState = {
    maxCapacity: 20,
    curCapacity: 20,
    tasks: [],
    path: []
} 

const botStates = {}

const updateBotState = (botId, botState) => {
    botStates[botId] = {
        ...botState[botId],
        ...botState
    }
}

const getBotState = (botId) => {
    return {...botStates[botId]};
}

const addBot = (botId, botState = defaultBotState) => {
    // TODO: write code to add bot in godot as well
    botStates[botId] = botState;
}

const removeBot = (botId) => {
    // TODO: write code to remove bot from godot as well
    delete botStates[botId];
}

exports.updateBotState = updateBotState;
exports.getBotState = getBotState;
exports.addBot = addBot;
exports.removeBot = removeBot;