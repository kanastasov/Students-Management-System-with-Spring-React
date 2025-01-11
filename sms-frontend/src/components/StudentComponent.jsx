import React, { useEffect, useState } from 'react'
import { createStudent, getStudent, updateStudentService } from '../services/StudentService';
import { useNavigate,useParams } from 'react-router-dom';
import { getAllDepartments } from '../services/DepartmentService';
const StudentComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams();

   const[departmentId, setDepartmentId] =  useState('');
   const[departments, setDepartments] = useState([]);


    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email: ''
    })

    useEffect(() => {
        getAllDepartments()
            .then((response) => {
                setDepartments(response.data); // Ensure this is inside the .then block
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // Ensure proper placement of the dependency array

    const navigator =  useNavigate();
    // const handleFirstName=(e) => {
    //     setFirstName(e.target.value)
    // }

    useEffect(() => {
        if(id){
          getStudent(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
          })  .catch(error => {
            console.log(error);
          })
        }  
    }, [id])

    const handleLastName=(e) => {
        setLastName(e.target.value)
    }

    
    const handleEmail=(e) =>  {
        setEmail(e.target.value)
    }

    const saveOrUpdateStudent=(e) => {
        e.preventDefault();


        if(validateForm()){
            const student = {firstName, lastName, email, departmentId};
            console.log(student);
              console.log(id);
            if(id){
                updateStudentService(id, student).then((response) => {
                    console.log(response.data);
                    navigator('/students');
                }).catch(error =>{
                    console.log(error);
                }
                    
                );
            }else {
                createStudent(student).then((response) => {
                console.log(response.data);
                navigator('/students');
            }).catch(error => {
                console.log(error);
            })
            }
       
       
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
                                type='text'
                                placeholder='Enter Student Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ?  'is-invalid' : ''}`}
                                onChange={handleEmail}>
                                </input>
                                {errors.email && <div className='invalid-feedback'> {errors.email} </div>}

                        </div>

                            <div className='form-group mb-2'>
                            <label className='form-label'>Select Department</label>
                            <select className='form-control'
                            value={departmentId}
                            onChange={(e) => setDepartmentId(e.target.value)}
                            >
                                <option value="select department">Select department</option>
                                {
                                    departments.map(department => 
                                        <option key={department.id} value={department.id}>
                                            {department.departmentName}
                                        </option>
                                    )
                                }
                            </select>
                                {errors.email && <div className='invalid-feedback'> {errors.email} </div>}

                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateStudent}>Submit</button>
                    </form>

                </div>
            </div>

        </div>


    </div>
  )
}

export default StudentComponent