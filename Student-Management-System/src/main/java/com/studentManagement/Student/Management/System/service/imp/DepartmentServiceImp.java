package com.studentManagement.Student.Management.System.service.imp;

import com.studentManagement.Student.Management.System.dto.DepartmentDto;
import com.studentManagement.Student.Management.System.entity.Department;
import com.studentManagement.Student.Management.System.exception.ResourceNotFoundException;
import com.studentManagement.Student.Management.System.mapper.DepartmentMapper;
import com.studentManagement.Student.Management.System.repository.DepartmentRepository;
import com.studentManagement.Student.Management.System.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImp implements DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);

        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long id) {
       Department department =  departmentRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with this id " + id)
                );

        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments =  departmentRepository.findAll();
        return departments.stream().map((department -> DepartmentMapper.mapToDepartmentDto(department))).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto departmentDto) {
        Department department =  departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with this id " + departmentId)
        );

        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        Department savedDepartment = departmentRepository.save(department);

        return DepartmentMapper.mapToDepartmentDto(savedDepartment);


    }

    @Override
    public void deleteDepartment(Long departmentId) {

         departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with this id " + departmentId)
        );

        departmentRepository.deleteById(departmentId);
    }


}
