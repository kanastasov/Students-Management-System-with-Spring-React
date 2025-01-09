package com.studentManagement.Student.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentManagement.Student.Management.System.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
