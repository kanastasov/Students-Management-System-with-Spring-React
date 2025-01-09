import React, {useEffect, useState} from 'react'

import { listStudents } from '../services/StudentService';

const ListStudentComponent = () => {
 const [students, setStudents] = useState([]);
 useEffect(() => {
    listStudents().then((response) =>
    {
        setStudents(response.data);
    }).catch(error => {
        console.error(error);
    })
 }

)
  return (
    <div className='container'>
        <h2 className='text-center'>
            List of students
        </h2>
            <table className='table table-striped table-border'>
                <thead>
                <tr>
                    <th>student id</th>
                    <th>student first name</th>
                    <th>student last name</th>
                    <th>student email</th>
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

                            </tr>
                        )
                    }

                </tbody>
            </table>
        
        </div>
  )
}

export default ListStudentComponent