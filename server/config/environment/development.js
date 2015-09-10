'use strict';

// Development specific configuration
// ==================================
module.exports = {

  domain: 'http://localhost',

  // Server port
  port: process.env.PORT || 3000,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/mongo'
  }

};
