-- Activity 13.16 Database Schema
DROP DATABASE IF EXISTS delicious_burger_dB;
CREATE DATABASE delicious_burger_dB;
USE delicious_burger_dB;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
