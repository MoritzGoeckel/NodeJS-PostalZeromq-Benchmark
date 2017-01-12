 var postal = require("postal");

var recieved = 0;

setTimeout(function(){

        console.time("Time for 10K msgs");
        for(var i = 0; i < 10 * 1000; i++)
            postal.publish({
                channel: "orders",
                topic: "item.add",
                data: {
                    sku: "AZDTF4346",
                    qty: 21
                }
            });

}, 100);

 var subscription = postal.subscribe({
        channel: "orders",
        topic: "item.add",
        callback: function(data, envelope) {

            recieved++;
            if(recieved >= 10 * 1000)
                console.timeEnd("Time for 10K msgs");

        }
});

