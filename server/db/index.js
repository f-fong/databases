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
    GET: function() {
      con.query('SELECT text, username FROM messages', function(err, rows) {
        if (err) {
          throw err;
        } 
        return rows;
      });
      
    },
    POST: function(results) {
      con.query('INSERT INTO messages (text, username, roomname) VALUES (' + 
        results.message + ', ' + results.username + ', ' + results.roomname + ')', 
        function(err, rows) {
          if (err) {
            throw err;
          }
        });
    }  
  },
  users: {
    GET: function() {
      con.query('SELECT name FROM users', function(err, rows) {
        if (err) {
          throw err;
        } 
        // not definite
        return rows;
      });
      
    },
    POST: function(results) {
      con.query('INSERT INTO users (name) VALUES (' + results.username + ')', 
        function(err, rows) {
          if (err) {
            throw err;
          }
        });
    } 
  }
};



con.end(function(err) {});