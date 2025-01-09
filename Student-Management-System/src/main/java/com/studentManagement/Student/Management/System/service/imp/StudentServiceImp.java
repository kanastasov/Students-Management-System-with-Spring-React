package com.studentManagement.Student.Management.System.service.imp;

import lombok.AllArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentManagement.Student.Management.System.dto.StudentDto;
import com.studentManagement.Student.Management.System.entity.Student;
import com.studentManagement.Student.Management.System.exception.ResourceNotFoundException;
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

	@Override
	public StudentDto getStudentById(Long studentId) {
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student not found with this ID " + studentId));

		return StudentMapper.mapStudentDto(student);
	}

	@Override
	public List<StudentDto> getAllStudents() {

		List<Student> students = studentRepository.findAll();

		return students.stream().map((student) -> StudentMapper.mapStudentDto(student)).collect(Collectors.toList());
	}

	@Override
	public StudentDto updateStudent(Long id, StudentDto student) {
		Student studentinner = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not found with this ID " + id));
		
		studentinner.setEmail("NewEmail@gmail.com");
		studentinner.setFirstName("NewFirstName");
		studentinner.setLastName("MewLastName");
		
		Student studentObj = studentRepository.save(studentinner);
		
		
		return StudentMapper.mapStudentDto(studentObj);
	}

	@Override
	public void deleteStudent(Long id) {
		studentRepository.deleteById(id);
		
	}

}
