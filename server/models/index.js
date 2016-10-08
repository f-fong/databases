var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.actions.messages.get(function(data) {
        callback(data);
      });
    }, // a function which produces all the messages
    post: function (reqBody, callback) {
      db.actions.messages.post(reqBody, function(err) {
        callback(err);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.actions.users.get(function(data) {
        callback(data);
      });
    },
    post: function (reqBody, callback) {
      db.actions.users.post(reqBody, function(err) {
        callback(err); 
      });
    }
  }
};

