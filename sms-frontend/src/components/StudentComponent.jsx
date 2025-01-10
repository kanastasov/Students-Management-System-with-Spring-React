import React, { useState } from 'react'
import { createStudent } from '../services/StudentService';
import { useNavigate,useParams } from 'react-router-dom';
const StudentComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams();
    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email: ''
    })

    const navigator =  useNavigate();
    // const handleFirstName=(e) => {
    //     setFirstName(e.target.value)
    // }

    const handleLastName=(e) => {
        setLastName(e.target.value)
    }

    
    const handleEmail=(e) =>  {
        setEmail(e.target.value)
    }

    const saveStudent=(e) => {
        e.preventDefault();


        if(validateForm()){
            const student = {firstName, lastName, email};
            console.log(student);
            createStudent(student).then((response) => {
                console.log(response.data);
            navigator('/students');
        })
        }
       
    }

    function validateForm(){
        let valid = true;

        const errorsCopy={... errors}

        if(firstName.trim()){
            errorsCopy.firstName='';
        }else {
            errorsCopy.firstName='First name required';
            valid= false;
        }
        if(lastName.trim()){
            errorsCopy.lastName='';
        }else {
            errorsCopy.lastName='Last name required';
            valid= false;
        }

         if(email.trim()){
            errorsCopy.email='';
        }else {
            errorsCopy.email='Email required';
            valid= false;
        }
        setErrors(errorsCopy);

        return valid;


    }

    function pageTitle(){
        if(id){
                return <h2 className='text-center'>Update Student</h2>

        }else {
                 return <h2 className='text-center'>Add Student</h2>

        }
    }
  return (
    <div className='container'>
        <br/>
        <br/>

        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }                
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter Student first name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${errors.firstName ?  'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}>

                                </input>
                                {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                        </div>

                           <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Student last name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName ?  'is-invalid' : ''}`}
                                onChange={handleLastName}>
                                </input>
                                 {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                        </div>

                           <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input
                                type='password'
                                placeholder='Enter Student Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ?  'is-invalid' : ''}`}
                                onChange={handleEmail}>
                                </input>
                                {errors.email && <div className='invalid-feedback'> {errors.email} </div>}

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