'use strict';

// Production specific configuration
// =================================
module.exports = {

  domain: 'http://prod.jp',

  // Server IP
  // ip:       process.env.OPENSHIFT_NODEJS_IP ||
  //           process.env.IP ||
  //           '127.0.0.1',

  // // Server port
  // port:     process.env.OPENSHIFT_NODEJS_PORT ||
  //           process.env.PORT ||
  //           9000,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://prod.jp/mongo'
  }

};
