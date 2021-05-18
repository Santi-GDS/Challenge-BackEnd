CREATE DATABASE blog;

USE blog;

CREATE TABLE posts (
id INT UNSIGNED PRIMARY KEY auto_increment,
title VARCHAR(100) NOT NULL,
content TEXT NOT NULL,
image VARCHAR(500) NOT NULL,
release_date DATE NOT NULL,
category_id INT UNSIGNED,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
deleted_at DATETIME -- Fecha de borrado del registro completo
);

CREATE TABLE categories(
id INT UNSIGNED PRIMARY KEY auto_increment,
category VARCHAR(50) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Fecha de alta
updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP, -- Fecha de modificación
deleted_at DATETIME, -- Fecha de borrado del registro completo
);

ALTER TABLE posts
	ADD FOREIGN KEY (category_id) REFERENCES categories(id);