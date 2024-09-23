CREATE DATABASE IF NOT EXISTS node_app;

USE node_app;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Brown', 'bob.brown@example.com'),
('Charlie Davis', 'charlie.davis@example.com'),
('Diana Evans', 'diana.evans@example.com'),
('Eve Fisher', 'eve.fisher@example.com'),
('Frank Green', 'frank.green@example.com'),
('Grace Harris', 'grace.harris@example.com'),
('Henry Irving', 'henry.irving@example.com');
