const ROSLIB = require('roslib')

const ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function() {
    console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});



// var listener = new ROSLIB.Topic({
//     ros : ros,
//     name : '/chatter',
//     messageType : 'std_msgs/msg/String'
// });

// listener.subscribe(function(message) {
//     console.log('Received message on ' + listener.name + ': ' + message.data);
//     listener.unsubscribe();
// });

// const botStates = {
//     bots: [
//         {
//             maxCapacity: 100,
//             currentCapacity: 50,
//             path: [{x:0,y:0},{x:0,y:1},{x:0,y:2}],
//         }
//     ]
// }

// var msg = new ROSLIB.Message({
//     data: JSON.stringify(botStates)
// })

// function publisher() {
//     setTimeout( () => {
//         listener.publish( msg );
//         console.log("published 1 message");
//         publisher();
//     }, 1000 );
// }

// publisher()



var destinationPublisher = new ROSLIB.Topic({
    ros: ros,
    name: '/destination/robot1',
    messageType: 'std_msgs/msg/String'
})

const botStates = {
    robot1: {
        destination: {
            x: 5,
            y: 5
        }
    }
} 

var msg = new ROSLIB.Message({
    data: JSON.stringify(botStates.robot1.destination)
}) 

function publishBotDestination() {
    destinationPublisher.publish(msg)
    setTimeout( () => {
        publishBotDestination()
    }, 1000 )
};

publishBotDestination();