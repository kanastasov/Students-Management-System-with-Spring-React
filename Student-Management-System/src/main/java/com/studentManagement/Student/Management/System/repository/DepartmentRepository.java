package com.studentManagement.Student.Management.System.repository;

import com.studentManagement.Student.Management.System.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
