import React, { useState } from 'react'

const StudentComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstName=(e) => {
        setFirstName(e.target.value)
    }

    const handleLastName=(e) => {
        setLastName(e.target.value)
    }

    
    const handleEmail=(e) =>  {
        setEmail(e.target.value)
    }

    const saveStudent=(e) => {
        e.preventDefault();
        const student = {firstName, lastName, email};
        console.log(student);

    }
  return (
    <div className='container'>
        <br/>
        <br/>

        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Student</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter Student first name'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={handleFirstName}>

                                </input>
                        </div>

                           <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Student last name'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={handleLastName}>

                                </input>
                        </div>

                           <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input
                                type='password'
                                placeholder='Enter Student Email'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={handleEmail}>

                                </input>
                        </div>

                        <button className='btn btn-success' onClick={saveStudent}>Submit</button>
                    </form>

                </div>
            </div>

        </div>


    </div>
  )
}

export default StudentComponent