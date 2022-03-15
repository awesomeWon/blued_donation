DROP DATABASE IF EXISTS blued-donation;

CREATE DATABASE blued-donation;
USE blued-donation;

-- CREATE TABLE lists(
--     id INTEGER AUTO_INCREMENT,
--     value TEXT,
--     PRIMARY KEY (id)
-- );

CREATE TABLE user (
    id INTEGER AUTO_INCREMENT UNIQUE  PRIMARY KEY,
    provider VARCHAR(100),
    name VARCHAR(10),
    state VARCHAR(20),
    oAuthToken VARCHAR(100),
    token VARCHAR(100),
    expires DATE

);
