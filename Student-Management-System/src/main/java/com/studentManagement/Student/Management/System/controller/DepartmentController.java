package com.studentManagement.Student.Management.System.controller;

import com.studentManagement.Student.Management.System.dto.DepartmentDto;
import com.studentManagement.Student.Management.System.dto.StudentDto;
import com.studentManagement.Student.Management.System.repository.DepartmentRepository;
import com.studentManagement.Student.Management.System.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
@AllArgsConstructor
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;


    @PostMapping()
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto) {
        DepartmentDto savedDto = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(savedDto, HttpStatus.CREATED);

    }



    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDto> getDepartment(@PathVariable Long id) {

       DepartmentDto departmentDto =  departmentService.getDepartmentById(id);

        return new ResponseEntity<>(departmentDto, HttpStatus.CREATED);

    }

    @GetMapping()
    public ResponseEntity<List<DepartmentDto>> getAllDepartments() {

        List<DepartmentDto> departmentDtoList =  departmentService.getAllDepartments();

        return ResponseEntity.ok(departmentDtoList);

    }




    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long id) {
        departmentService.deleteDepartment(id);

        return ResponseEntity.ok("Department deleted successfully");

    }


}
