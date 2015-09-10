/**
 * AMQP Reciever
 */

'use strict';

var amqp = require('amqp');

module.exports = function() {

  // var host = {
  //   host: 'localhost'
  // , port: 5671
  // , login: 'guest'
  // , password: 'guest'
  // , authMechanism: 'AMQPLAIN'
  // , vhost: '/'
  // , ssl: { enabled : true
  //        , keyFile : '/path/to/key/file'
  //        , certFile : '/path/to/cert/file'
  //        , caFile : '/path/to/cacert/file'
  //        , rejectUnauthorized : true
  //        }
  // };

console.log('amqp');

  var connection = amqp.createConnection({ host: 'dev.rabbitmq.com' });

  // Wait for connection to become established.
  connection.on('ready', function() {
    // Use the default 'amq.topic' exchange
    connection.queue('batch-queue', function (q) {
        // Catch all messages
        q.bind('#');

        // Receive messages
        q.subscribe(function (message) {
          // Print messages to stdout
          console.log(message);
          console.log(message.data.toString('utf8'));

          connection.disconnect();
          console.log('disconnected');
        });
    });
  });
};
