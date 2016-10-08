CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  text VARCHAR(150),
  username VARCHAR(150),
  roomname VARCHAR(150),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

