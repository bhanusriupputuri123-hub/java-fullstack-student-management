package com.bhanu.studentmanagement.service;

import com.bhanu.studentmanagement.entity.Student;
import com.bhanu.studentmanagement.repository.StudentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {
    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    public List<Student> searchStudents(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    public Student createStudent(Student student) {
        return repository.save(student);
    }

    public Student updateStudent(Long id, Student updated) {
        Student student = getStudentById(id);
        student.setName(updated.getName());
        student.setEmail(updated.getEmail());
        student.setCourse(updated.getCourse());
        student.setDepartment(updated.getDepartment());
        student.setCgpa(updated.getCgpa());
        return repository.save(student);
    }

    public void deleteStudent(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Student not found with id: " + id);
        }
        repository.deleteById(id);
    }
}
