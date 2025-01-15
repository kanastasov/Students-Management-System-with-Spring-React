import React, { useState } from 'react'

const LoginComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginForm(e) {
        e.preventDefault();
        const loginObj = {username, password};
        console.log(loginObj);
    }
  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='col-md-6 offset-md-6'>
          <div className='card'>
            <div className='car-header'>
              <h2 className='text-center'>User Login form</h2>
            </div>

            <div className='card-body'>
              <form>
               <div className='row mb-3'>
                  <label className='col-md-3 control-label'> Username</label>
                  <div className='col-md-9'>
                    <input
                      type='text'
                      name='username'
                      className='form-control'
                      placeholder='Enter username'
                      value = {username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                </div>

                         <div className='row mb-3'>
                  <label className='col-md-3 control-label'> Password</label>
                  <div className='col-md-9'>
                    <input
                      type='text'
                      name='password'
                      className='form-control'
                      placeholder='Enter password'
                      value = {password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>

              <div className='form-group mb-3'>
                <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>Submit</button>
                
              </div>
              </form>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default LoginComponent