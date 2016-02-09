
var topicName = 'topic';
var partitionType = 0;
var brokerAddress = '192.168.99.100:9092';

var Kafka = require('no-kafka');


var consumer = new Kafka.SimpleConsumer({connectionString: brokerAddress });
consumer.on('data', function (messageSet, topic, partition) {
    messageSet.forEach(function (m) {
        //console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
        console.log( m.message.value.toString('utf8'));
    });
});

return consumer.init().then(function () {
    return Promise.all([
        consumer.subscribe(topicName, partitionType, {time: Kafka.EARLIEST_OFFSET})
    ]);
});

