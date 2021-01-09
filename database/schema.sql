DROP DATABASE IF EXISTS kickstand;
CREATE DATABASE kickstand;
USE kickstand;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name CHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (user_id)
);

CREATE TABLE projects (
    project_id INT NOT NULL AUTO_INCREMENT,
    project_name CHAR(100) NOT NULL UNIQUE,
    owner INT,
    FOREIGN KEY (owner) REFERENCES users(user_id),
    PRIMARY KEY (project_id)
);

CREATE TABLE updates (
    update_id INT NOT NULL AUTO_INCREMENT,
    title CHAR(200) NOT NULL,
    body TEXT,
    likes INT DEFAULT 0,
    comments INT DEFAULT 0,
    published_date DATE,
    posted_by INT,
    project INT,
    FOREIGN KEY (posted_by) REFERENCES users(user_id),
    FOREIGN KEY (project) REFERENCES projects(project_id),
    PRIMARY KEY(update_id)
);
