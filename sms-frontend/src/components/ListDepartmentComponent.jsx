import React, { useState } from 'react'

const ListDepartmentComponent = () => {

    let data = [
        {
            "id": 1,
            "departmentName": "StudentDepartment",
            "departmentDescription": "Student departmentDesc"
        },
        {
            "id": 2,
            "departmentName": "StudentDepartment2",
            "departmentDescription": "Student departmentDesc2"
        },
        {
            "id": 3,
            "departmentName": "StudentDepartment3",
            "departmentDescription": "Student departmentDesc3"
        },
    ]

    const[departments, setDepartments] = useState(data);

    function updateDepartment() {

    }

    function deleteDepartment() {

    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Departments</h2>
 <table className='table table-striped table-border'>
                <thead>
                <tr>
                    <th>department id</th>
                    <th>department Name</th>
                    <th>department Description</th>
                    <th>Actions</th>

                </tr>
                </thead>

                <tbody>
                    {
                        departments.map(department => 
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=> updateDepartment(department.id)}>
                                        Update
                                    </button>
                                         <button className='btn btn-danger' onClick={()=> deleteDepartment(department.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
    </div>
  )
}

export default ListDepartmentComponent