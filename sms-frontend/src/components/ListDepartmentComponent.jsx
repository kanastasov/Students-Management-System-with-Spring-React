import React, { useEffect, useState } from 'react'
import { getAllDepartments } from '../services/DepartmentService';
import { Link,useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {

  

    const[departments, setDepartments] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
      listOfDepartments();
        
    })
    function updateDepartment(id) {
        navigator(`/edit-department/${id}`);
    }

    function deleteDepartment(id) {
        deleteDepartment(id)
        .then((response) => {
            console.log(response.data);
            listOfDepartments();
        }).catch(err => {
            console.log(err);
        });


    }

     

    function listOfDepartments(){
        getAllDepartments().then((response) => {
        console.log(response.data);
        setDepartments(response.data);
      }).catch(error => {
        console.log(error) });
     
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Departments</h2>
        <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
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