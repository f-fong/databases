var db = require('../db');

module.exports = {
  messages: {
    get: function (results) {
      actions.messages.get();
    }, // a function which produces all the messages
    post: function (results) {
      actions.messages.post(results);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (results) {
      actions.users.get();
    },
    post: function (results) {
      actions.users.post(results);
    }
  }
};

