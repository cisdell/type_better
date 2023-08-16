-- Create a new database called 'DatabaseName'
CREATE DATABASE GAME_STAT if not EXISTS;

/c GAME_STAT;

CREATE TABLE IF NOT EXISTS USERS (
  email VARCHAR (50) NOT NULL PRIMARY KEY,
  last_login TIMESTAMP NOT NULL,
  total_time INT NOT NULL,
  highest_clear INT NOT NULL
);

CREATE TABLE IF NOT EXISTS USERS_STAT (
  email VARCHAR (50) NOT NULL,
  usage_time TIMESTAMP NOT NULL,
  time_spent int,
  clear_count int,
  FOREIGN KEY (email)
    REFERENCES USERS (email)
);
