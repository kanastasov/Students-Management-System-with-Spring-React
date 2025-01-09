package com.studentManagement.Student.Management.System.service.imp;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.studentManagement.Student.Management.System.dto.StudentDto;
import com.studentManagement.Student.Management.System.entity.Student;
import com.studentManagement.Student.Management.System.mapper.StudentMapper;
import com.studentManagement.Student.Management.System.repository.StudentRepository;
import com.studentManagement.Student.Management.System.service.StudentService;


@Service
@AllArgsConstructor
public class StudentServiceImp implements StudentService {

    private StudentRepository studentRepository;

    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        Student student = StudentMapper.mapStudent(studentDto);
        Student savedStudent = studentRepository.save(student);

        return StudentMapper.mapStudentDto(savedStudent);
    }
}
