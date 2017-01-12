var zmq = require("zeromq");
var sockPush = zmq.socket('push');

var recieved = 0;

sockPush.bindSync('tcp://127.0.0.1:3000');

setTimeout(function(){
    
    console.time("Time for 10K msgs");
    for(var i = 0; i < 10 * 1000; i++)
        sockPush.send(JSON.stringify({"pferd":"haus"}));

}, 100);

//End

var sockPull = zmq.socket('pull');
sockPull.connect('tcp://127.0.0.1:3000');

sockPull.on('message', function(msg){
    var json = JSON.parse(msg.toString());
    //console.log("Msg: " + json["pferd"]);

    recieved++;
    if(recieved >= 10 * 1000)
        console.timeEnd("Time for 10K msgs");
});