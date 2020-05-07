CREATE DATABASE assignment;
USE assignment;
CREATE TABLE user ( id int auto_increment, email varchar(30), password varchar(20),primary key(id) );
INSERT INTO user ( id, email, password ) VALUES ( '001', '001@gmail.com', '001pw' );
INSERT INTO user ( id, email, password ) VALUES ( '002', '002@gmail.com', '002pw' );
INSERT INTO user ( id, email, password ) VALUES ( '003', '003@gmail.com', '003pw' );
