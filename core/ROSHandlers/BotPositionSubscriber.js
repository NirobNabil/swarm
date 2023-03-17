const ROSLIB = require('roslib')
const rosConn = require('./connection')
const BotStateHandler = require('../RobotHandlers/BotStateHandler')
const DestinationHandler = require('../RobotHandlers/DestinationHandler')
const { parsePositionJSON } = require('./util')

// { botId: listener_object }
const listeners = {}


const addListener = (botId) => {
    const ros = rosConn.getROSInstance();

    var listener = new ROSLIB.Topic({
        ros: ros,
        name: `/position/${botId}`,
        messageType: 'std_msgs/msg/String'
    })

    listener.subscribe(function(message) {
        // console.log(parsePositionJSON(message.data))
        let curPos = parsePositionJSON(message.data);
        curPos.x = Math.round(curPos.x);
        curPos.y = Math.round(curPos.y);
        BotStateHandler.updateBotState( botId, { curPos } );
        DestinationHandler.updatePathAccordingToPosition(botId);
        // console.log("subscribed ", JSON.parse(message.data))
    });
    
} 

const clearListener = (botId) => {
    listeners[botId].unsubscribe();
}


exports.addListener = addListener;
exports.clearListener = clearListener;

