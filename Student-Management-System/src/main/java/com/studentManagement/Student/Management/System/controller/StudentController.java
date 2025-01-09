package com.studentManagement.Student.Management.System.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.studentManagement.Student.Management.System.dto.StudentDto;
import com.studentManagement.Student.Management.System.service.StudentService;


@RestController
@RequestMapping("/api")
public class StudentController {

  @Autowired
  private StudentService studentService;


  @PostMapping("/product")
  public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto) {
          StudentDto savedDto = studentService.createStudent(studentDto);
          return new ResponseEntity<>(savedDto, HttpStatus.CREATED);

  }

  @GetMapping("/home")
  public String home() {
      return "Hello World";
  }
}