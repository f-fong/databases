var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var con = mysql.createConnection({
  user: 'root',
  password: '123456',
  database: 'chat'
});

con.connect(function(err) {
  if (err) {
    console.log('Error connectiong to Db');
    return;
  }
  console.log('Connection established');
});

var actions = {
  messages: {
    get: function(callback) {
      con.query('SELECT text, username FROM messages;', function(err, rows) {
        // if (err) {
        //   throw err;
        // } 
        callback(rows);
      });
      
    },
    post: function(reqBody, callback) {
      var queryStr = "INSERT INTO messages (text, username, roomname) VALUES ('" + 
        reqBody.message + "', '" + reqBody.username + "', '" + reqBody.roomname + "');";
      console.log('queryStr: ' + queryStr);
      con.query(queryStr, 
        function(err, rows) {
          if (err) {
            callback('cannot post message');
          } else {
            callback.status(200).end();
          }
        });
    }  
  },
  users: {
    get: function(callback) {
      con.query('SELECT name FROM users;', function(err, rows) {
        // if (err) {
        //   throw err;
        // } 
        callback(rows);
      });  
    },
    post: function(reqBody, callback) {
      console.log('hey users');
      con.query('INSERT INTO users (name) VALUES (' + reqBody.username + ');', 
        function(err, rows) {
          if (err) {
            callback('cannot post user');
          } else {
            callback.status(200).end();
          }
        });
    } 
  }
};



con.end(function(err) {});

module.exports.actions = actions;
module.exports.con = con;