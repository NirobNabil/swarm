const ROSLIB = require('roslib')

//TODO: remove addbot from here
const BotStateHandler = require('../RobotHandlers/BotStateHandler');
const ShelfLocationsPublisher = require('./ShelfLocationsPublisher');

const ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function() {
    ShelfLocationsPublisher.publishShelfData();
    BotStateHandler.addBot('robot1');
    BotStateHandler.addBot('robot2');
    BotStateHandler.addBot('robot3');
    console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});

const getROSInstance = () => ros;

exports.getROSInstance = getROSInstance;
