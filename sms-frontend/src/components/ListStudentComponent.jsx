import React from 'react'

const ListStudentComponent = () => {

    const data = [
        {
        "id":1,
        "firstName":"kiril",
        "lastName": "anastasov",
        "email": "kirilanastasoff@gmail.com"
        },
        
        {
        "id":2,
        "firstName":"peter",
        "lastName": "anastasov",
        "email": "peter@gmail.com"
        },

        {
        "id":3,
        "firstName":"metar",
        "lastName": "anastasov",
        "email": "metar@gmail.com"
        },
    ]
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
                        data.map(student => 
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