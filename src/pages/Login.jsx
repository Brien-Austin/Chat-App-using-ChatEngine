import React from 'react';
import "./pages.css";
import Add from '../assets/add-image.png'

const Register = () => {
  return (
      <>
          <div className='reg-container'>
              <div className='reg-form'>
                  <h2>Chat 24</h2>
                    <h3 style={{fontWeight:"400"}}>Welcome to Chat 24</h3>
                  <form>
                    
                    
                     
                      
                    
                          <input   type='text' placeholder='Enter your EmailID' required/>
                      
                    
                          <input  type='password' placeholder='Enter your password' required/>
                      
             
                      
                      
                      <button type="submit">Login</button>
                      <p style={{fontSize:"13px"}}>Don't have an account ? <a  className="ref" href='#' >Register</a></p>
                      
                  </form>
              </div>
              
          </div>
    
    </>
  )
}

export default Register