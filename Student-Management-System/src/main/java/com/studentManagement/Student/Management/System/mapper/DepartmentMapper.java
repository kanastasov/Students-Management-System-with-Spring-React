package com.studentManagement.Student.Management.System.mapper;

import com.studentManagement.Student.Management.System.dto.DepartmentDto;
import com.studentManagement.Student.Management.System.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department){
        return new DepartmentDto(department.getId(),
                department.getDepartmentName(), department.getDepartmentDescription());
    }

    public static Department mapToDepartment(DepartmentDto departmentDto){
        return new Department(departmentDto.getId(),
                departmentDto.getDepartmentName(), departmentDto.getDepartmentDescription());
    }
}
