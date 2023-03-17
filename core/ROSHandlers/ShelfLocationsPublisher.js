const ROSLIB = require('roslib')
const rosConn = require('./connection')
const ShelfHandler = require('../RobotHandlers/ShelfHandler');

const publishRate = 2; // in Hertz

let publisherTimer = null;

const publishShelfData = () => {
    const ros = rosConn.getROSInstance();

    var publisher = new ROSLIB.Topic({
        ros: ros,
        name: `/shelfLocations`,
        messageType: 'std_msgs/msg/String'
    })
    
    const publish = () => {
        let msg = new ROSLIB.Message({
            data: JSON.stringify(ShelfHandler.getShelves())
        }) 
        publisher.publish(msg)
        // console.log("published ", DestinationHandler.getDestination(botId))
        
        publisherTimer = setTimeout( () => {
            publish()
        }, 1000/publishRate )
    };
    
    publish();
} 

const clearPublisher = () => {
    clearTimeout(publisherTimer)
}


exports.publishShelfData = publishShelfData;
exports.clearPublisher = clearPublisher;

