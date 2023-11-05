import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import Img from '../Assets/cards/loginbg.avif'
// import "../styles/Login.css";

const Login = () => {
  const [credentials,setcredentials]=useState({email:"",password:""})
  let navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:3000/api/loginuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    }) 
    const json = await response.json()
    console.log(json);

    if(!json.success){
     alert("Enter valid credentials")
    }
    if(json.success){
      navigate('/')
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
    }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }


  return (
    <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
      <div className="container vh-100">
        <div className="row justify-content-start">
          <div className="col-md-6 mt-5">
            <div className="card glassmorphism mt-4">
              <div className="card-header bg-primary text-white">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="text-white">Email:</label>
                    <input type="email" placeholder="Enter email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-white">Password:</label>
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
                  <button type="submit" className="mt-2 btn btn-primary btn-block">
                    Log in
                  </button>
                </form>
              </div>
              <div className="text-center mt-3">
                <p className="text-white">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;