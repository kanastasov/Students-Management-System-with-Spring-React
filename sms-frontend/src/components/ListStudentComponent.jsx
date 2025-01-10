import React, {useEffect, useState} from 'react'
import { listStudents } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const ListStudentComponent = () => {
 const [students, setStudents] = useState([]);
 const navigator= useNavigate();
 useEffect(() => {
    listStudents().then((response) =>
    {
        setStudents(response.data);
    }).catch(error => {
        console.error(error);
    })
 }

)

function addNewStudent() {
    navigator('/add-student')
}

function updateStudent(id){
    navigator(`/edit-student/${id}`)
}
  return (
    <div className='container'>
        <h2 className='text-center'>
            List of students
        </h2>
        <button className="btn btn-primary mb-2" onClick={addNewStudent}>Add Student</button>
            <table className='table table-striped table-border'>
                <thead>
                <tr>
                    <th>student id</th>
                    <th>student first name</th>
                    <th>student last name</th>
                    <th>student email</th>
                    <th>Actions</th>

                </tr>
                </thead>

                <tbody>
                    {
                        students.map(student => 
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=> updateStudent(student.id)}>
                                        Update
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

export default ListStudentComponent