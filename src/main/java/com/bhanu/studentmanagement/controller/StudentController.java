package com.bhanu.studentmanagement.controller;

import com.bhanu.studentmanagement.entity.Student;
import com.bhanu.studentmanagement.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
public class StudentController {
    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Student> getAllStudents(@RequestParam(required = false) String search) {
        return (search == null || search.isBlank())
                ? service.getAllStudents()
                : service.searchStudents(search);
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return service.getStudentById(id);
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) {
        return ResponseEntity.ok(service.createStudent(student));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id,
                                                  @Valid @RequestBody Student student) {
        return ResponseEntity.ok(service.updateStudent(id, student));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
}
