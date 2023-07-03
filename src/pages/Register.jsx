import React from 'react';
import "./pages.css";
import Add from '../assets/add-image.png'

const Register = () => {
  return (
      <>
          <div className='reg-container'>
              <div className='reg-form'>
                  <h2>Chat 24</h2>
                    <h3>Register</h3>
                  <form>
                    
                    
                          <input   type='text' placeholder='Enter your Name' required/>
                      
                    
                          <input   type='text' placeholder='Enter your EmailID' required/>
                      
                    
                          <input  type='password' placeholder='Enter your password' required/>
                      
                    
                      <input style={{ display: "none" }} className="inp" type='file' id='file' />
                      <label htmlFor='file' ><img style={{width:"25px",height:"25px"}} src={Add}/> <span>Add an avatar</span></label>
                      
                      
                      <button type="submit">Signup</button>
                      <p style={{fontSize:"13px"}}>Have an account ? <a  className="ref" href='#' >Login</a></p>
                      
                  </form>
              </div>
              
          </div>
    
    </>
  )
}

export default Register