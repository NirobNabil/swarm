const ROSLIB = require('roslib')
const rosConn = require('./connection')
const DestinationHandler = require('../RobotHandlers/DestinationHandler')
const BotStateHandler = require('../RobotHandlers/BotStateHandler')

const publishRate = 2; // in Hertz

// { botId: publisher_timer_id }
const publishers = {}

const addPublisher = (botId) => {
    const ros = rosConn.getROSInstance();

    var publisher = new ROSLIB.Topic({
        ros: ros,
        name: `/destination/${botId}`,
        messageType: 'std_msgs/msg/String'
    })
    
    const publish = () => {
        let msg = new ROSLIB.Message({
            data: JSON.stringify(DestinationHandler.getDestination(botId))
        }) 
        publisher.publish(msg)
        // console.log("published ", DestinationHandler.getDestination(botId))
        // console.log(BotStateHandler.getBotState(botId).path)

        publishers[botId] = setTimeout( () => {
            publish()
        }, 1000/publishRate )
    };
    
    publish();
} 

const clearPublisher = (botId) => {
    clearTimeout(publishers[botId])
}


exports.addPublisher = addPublisher;
exports.clearPublisher = clearPublisher;

