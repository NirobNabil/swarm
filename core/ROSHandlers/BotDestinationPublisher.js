const ROSLIB = require('roslib')
const ros = require('./connection')
const DestinationHandler = require('../RobotHandlers/DestinationHandler')

const publishRate = 10; // in Hertz

// { botId: publisher_timer_id }
const publishers = {}

const addPublisher = (botId) => {
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
        
        publishers[botId] = setTimeout( () => {
            publish()
        }, 1/publishRate )
    };
    
    publish();
} 

const clearPublisher = (botId) => {
    clearTimeout(publishers[botId])
}


exports.addPublisher = addPublisher;
exports.clearPublisher = clearPublisher;
