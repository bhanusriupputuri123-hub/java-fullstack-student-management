# Student Management System

A Java Full Stack CRUD application built using Spring Boot, Spring Data JPA, MySQL, HTML, CSS and JavaScript.

## Features
- Add, update, delete and view students
- Search students by name
- RESTful APIs
- MySQL persistence
- JPA/Hibernate ORM
- Responsive frontend served by Spring Boot

## Tech Stack
Java 25, Spring Boot 3.4.5, Spring Web, Spring Data JPA, Hibernate, MySQL, HTML5, CSS3, JavaScript, Maven, Git.

## Run locally

1. Make sure Java 17+, Maven and MySQL are installed.
2. Open `src/main/resources/application.properties`.
3. Set the `DB_PASSWORD` environment variable to your MySQL root password before running the application.
4. Run:
   `mvn spring-boot:run`
5. Open:
   `http://localhost:8080`

## API endpoints
GET `/api/students`
GET `/api/students/{id}`
GET `/api/students?search=name`
POST `/api/students`
PUT `/api/students/{id}`
DELETE `/api/students/{id}`

## Resume project title
Student Management System | Java, Spring Boot, MySQL, JPA, HTML, CSS, JavaScript
