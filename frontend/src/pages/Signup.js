import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import Img from '../Assets/cards/signupbg.jpg'

const SignIn = () => {

  const [credentials,setcredentials]=useState({name:"",userId:"",password:"",email:""})
  let navigate=useNavigate()
  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:3000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name, userId:credentials.userId ,password:credentials.password, email:credentials.email})
    }) 
    const json = await response.json()
    console.log(json);

    if(!json.success){
     alert("Enter valid credentials")
    }else{
      alert("Account created")
      navigate('/')
    }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
    <div className="container vh-100">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className=" glassmorphism1">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center p-1">Sign In</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="text" className="text-white">Name:</label>
                  <input type="text" placeholder="Enter the Name" className="form-control" name="name" value={credentials.name} onChange={onChange} />
                </div>
              <div className="form-group">
                  <label htmlFor="text" className="text-white">AdminId:</label>
                  <input type="text" placeholder="Enter Admin Id" className="form-control" name="userId" value={credentials.userId} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-white">Email:</label>
                  <input type="email" placeholder="Enter email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password"  className="text-white">Password:</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className=" m-3 btn btn-primary btn-block">
                  Sign In
                </button>
                <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
              </form>
              <hr className="text-white"/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;