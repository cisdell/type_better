
DROP DATABASE typing_game;
CREATE DATABASE IF NOT EXISTS typing_game;

\c typing_game;

-- Create USERS table
CREATE TABLE IF NOT EXISTS USERS (
  email VARCHAR(50) NOT NULL PRIMARY KEY,
  last_login TIMESTAMP,
  total_time INT NOT NULL DEFAULT 0,
  highest_clear INT NOT NULL DEFAULT 0
);

-- Create USERS_STAT table with a foreign key reference
CREATE TABLE IF NOT EXISTS USERS_STAT (
  email VARCHAR(50) NOT NULL,
  login_time TIMESTAMP NOT NULL,
  time_spent INT,
  clear_count INT
  -- FOREIGN KEY (email) REFERENCES USERS (email)
);

INSERT INTO USERS (email, last_login, total_time, highest_clear)
VALUES
  ('cisdell@gmail.com', '2023-08-16 21:19:07.908258', 0,0 ),
  ('cisdell@icloud.com', '2023-08-16 21:19:12.882379', 0,0 );


INSERT INTO USERS_STAT (email, login_time, time_spent, clear_count)
VALUES
  ('cisdell@gmail.com', '2023-08-16 21:19:07.908258', 10,10 ),
  ('cisdell@icloud.com', '2023-08-19 21:19:12.882379', 0,0 ),
  ('cisdell@gmail.com', '2023-08-17 21:19:07.908258', 15,25 )