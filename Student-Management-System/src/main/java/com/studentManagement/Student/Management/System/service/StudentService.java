package com.studentManagement.Student.Management.System.service;

import com.studentManagement.Student.Management.System.dto.StudentDto;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    
    StudentDto getStudentById(Long studentId);
    
    
}
