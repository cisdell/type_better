-- Create a new database called 'GAME_STAT' if it doesn't exist
CREATE DATABASE typing_game

-- Connect to the newly created database
\c typing_game;

-- Create USERS table
CREATE TABLE IF NOT EXISTS USERS (
  email VARCHAR(50) NOT NULL PRIMARY KEY,
  last_login TIMESTAMP NOT NULL,
  total_time INT NOT NULL,
  highest_clear INT NOT NULL
);

-- Create USERS_STAT table with a foreign key reference
CREATE TABLE IF NOT EXISTS USERS_STAT (
  email VARCHAR(50) NOT NULL,
  usage_time TIMESTAMP NOT NULL,
  time_spent INT,
  clear_count INT,
  FOREIGN KEY (email) REFERENCES USERS (email)
);