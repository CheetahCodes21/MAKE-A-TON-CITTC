import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import Img from '../Assets/cards/signupbg.jpg'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; 
import '../css/Login.css'

const SignIn = () => {

  const [credentials,setcredentials]=useState({name:"",userId:"",password:"",email:""})
  const [showPassword, setShowPassword] = useState(false);
  let navigate=useNavigate()

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
      // alert("Account created")
      navigate('/login')
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
          <div className="card bg-transparent mt-5 ">
            <div className="card-header mt-5 text-white">
              <h1 className="text-center p-1">Sign In...</h1>
            </div>
            <div className="card-body input-container">
              <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                  <label htmlFor="text" className="text-white">Name:</label>
                  <input type="text" placeholder="Enter the Name" className="form-control white-text text-white" name="name" value={credentials.name} onChange={onChange}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '2px solid #fff' ,
                    
                  }}
                  />
                </div>
              <div className="form-group mb-4">
                  <label htmlFor="text" className="text-white">AdminId:</label>
                  <input type="text" placeholder="Enter Admin Id" className="form-control white-text text-white" name="userId" value={credentials.userId} onChange={onChange}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '2px solid #fff' ,
                    
                  }}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="text-white">Email:</label>
                  <input type="email" placeholder="Enter email" className="form-control white-text text-white" id="email" name="email" value={credentials.email} onChange={onChange}
                   style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '2px solid #fff' ,
                    
                  }}
                  />
                </div>
                {/* <div className="form-group">
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
                </div> */}
                 <div className="form-group mb-2">
      <label htmlFor="password" className="text-white ">
        Password:
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          className="form-control text-white white-text"
          id="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: '2px solid #fff',
          }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
         {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
        </button>
      </div>
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