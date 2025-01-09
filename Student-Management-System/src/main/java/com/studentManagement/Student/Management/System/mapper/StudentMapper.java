package com.studentManagement.Student.Management.System.mapper;

import com.studentManagement.Student.Management.System.dto.StudentDto;
import com.studentManagement.Student.Management.System.entity.Student;


public class StudentMapper {
    public static StudentDto mapStudentDto(Student student) {
        return new StudentDto(
                student.getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail()
        );

    }

    public static Student mapStudent(StudentDto studentDto) {
        return new Student(studentDto.getId(), studentDto.getFirstName(), studentDto.getLastName(), studentDto.getEmail());
    }
}
