CREATE DATABASE IF NOT EXISTS smart_farming;
use smart_farming;
	CREATE TABLE IF NOT EXISTS farmers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mobile VARCHAR(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    farmerId VARCHAR(255) NOT NULL,
    surveyId VARCHAR(255) NOT NULL
);

select * from farmers;

CREATE TABLE borewells (
    id INT AUTO_INCREMENT PRIMARY KEY,
    borewell_id VARCHAR(50) NOT NULL,
    farmer_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
drop table borewells;
CREATE TABLE borewells (
  id INT AUTO_INCREMENT PRIMARY KEY,
  borewellId VARCHAR(50) NOT NULL,
  farmerId VARCHAR(50) NOT NULL
);

select * from borewells;
select * from farmers;

