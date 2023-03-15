const BotDestinationPublisher = require('../ROSHandlers/BotDestinationPublisher')
const BotPositionSubscriber = require('../ROSHandlers/BotPositionSubscriber')

const defaultBotState = {
    id: 'robotDefault',
    maxCapacity: 20,
    curCapacity: 20,
    tasks: [],
    path: [],
    curPos: {
        x: 0,
        y: 0
    }
} 

const botStates = {}

const updateBotState = (botId, botState) => {
    botStates[botId] = {
        ...botStates[botId],
        ...botState
    }
}

const getBotState = (botId) => {
    return {...botStates[botId]};
}

const addBot = (botId, botState = defaultBotState) => {
    // TODO: write code to add bot in godot as well
    botStates[botId] = { ...defaultBotState, id: botId };
    BotDestinationPublisher.addPublisher(botId);
    BotPositionSubscriber.addListener(botId);
}

const removeBot = (botId) => {
    // TODO: write code to remove bot from godot as well
    delete botStates[botId];
    BotDestinationPublisher.clearPublisher(botId);
    BotPositionSubscriber.removeBot(botId);
}

exports.updateBotState = updateBotState;
exports.getBotState = getBotState;
exports.addBot = addBot;
exports.removeBot = removeBot;