DROP DATABASE IF EXISTS kickstand;
CREATE DATABASE kickstand;
USE kickstand;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_name CHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE projects (
    id INT NOT NULL AUTO_INCREMENT,
    project_name CHAR(200) NOT NULL UNIQUE,
    owner INT,
    FOREIGN KEY (owner) REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE updates (
    id INT NOT NULL AUTO_INCREMENT,
    title CHAR(200) NOT NULL,
    body TEXT,
    likes INT DEFAULT 0,
    comments INT DEFAULT 0,
    published_date DATE,
    posted_by INT,
    project INT,
    FOREIGN KEY (posted_by) REFERENCES users(id),
    FOREIGN KEY (project) REFERENCES projects(id),
    PRIMARY KEY(id)
);
