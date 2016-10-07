CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(100),
  text VARCHAR(150),
  user_id int(100),
  room_id int(100),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id int(100),
  name VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id int(100),
  name VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE users_rooms (
  /* Describe your table here.*/
  user_id int(100),
  room_id int(100)
);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms(id);
ALTER TABLE users_rooms ADD FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE users_rooms ADD FOREIGN KEY (room_id) REFERENCES rooms(id);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

