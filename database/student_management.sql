CREATE DATABASE IF NOT EXISTS student_management_db;
USE student_management_db;

-- Spring Boot/JPA creates and updates the students table automatically.
-- Optional sample records:
INSERT INTO students (name, email, course, department, cgpa)
SELECT 'Anjali Kumar', 'anjali@example.com', 'B.Tech', 'CSE', 8.7
WHERE NOT EXISTS (SELECT 1 FROM students WHERE email='anjali@example.com');

INSERT INTO students (name, email, course, department, cgpa)
SELECT 'Rahul Sharma', 'rahul@example.com', 'B.Tech', 'IT', 8.2
WHERE NOT EXISTS (SELECT 1 FROM students WHERE email='rahul@example.com');
