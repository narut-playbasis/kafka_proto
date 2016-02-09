// Version 1 work
//
//var kafka = require('kafka-node'),
//    HighLevelProducer = kafka.HighLevelProducer,
//    client = new kafka.Client(),
//    producer = new HighLevelProducer(client),
//    payloads = [
//        { topic: 'test', messages: 'hi' }
//    ];
//producer.on('ready', function () {
//    console.log('Connected');
//});
//var readline = require('readline');
//var rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//    terminal: false
//});
//
//rl.on('line', function(line){
//    payloads[0].messages = line;
//    producer.send(payloads, function (err, data) {
//        console.log(data);
//    });
//})

var topicName = 'topic';
var partitionType = 0;
var brokerAddress = '192.168.99.100:9092';

var Kafka = require('no-kafka');
var producer = new Kafka.Producer({connectionString: brokerAddress });

producer.init().then(function(){

    })
    .then(function (result) {
        /*
         [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
         */
        console.log(result);
    });

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
rl.on('line', function(line){
    producer.send({
        topic: topicName,
        partition: partitionType,
        message: {
            value: line
        }
    });
})