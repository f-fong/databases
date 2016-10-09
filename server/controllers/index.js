var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'results': data}));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err) {
        if (err) {
          res.statusCode = 404;
          res.send(JSON.stringify({'error': err}));
        } else {
          res.statusCode = 201;
          res.send();
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(data) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'results': data}));
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function(err) {
        if (err) {
          res.statusCode = 404;
          res.json(err);
        } else {
          res.statusCode = 201;
          res.send();
          
        }
      });    
    }
  }
};

