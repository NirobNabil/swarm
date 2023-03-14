const ROSLIB = require('roslib')
const ros = require('./connection')
const BotStateHandler = require('../RobotHandlers/BotStateHandler')
const { parsePositionJSON } = require('./util')

// { botId: listener_object }
const listeners = {}


const addListener = (botId) => {
    var listener = new ROSLIB.Topic({
        ros: ros,
        name: `/position/${botId}`,
        messageType: 'std_msgs/msg/String'
    })

    listener.subscribe(function(message) {
        BotStateHandler.updateBotState( botId, parsePositionJSON(message) );
    });
    
} 

const clearListener = (botId) => {
    listeners[botId].unsubscribe();
}


exports.addListener = addListener;
exports.clearListener = clearListener;

