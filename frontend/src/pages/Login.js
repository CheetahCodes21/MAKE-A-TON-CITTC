import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import Img from '../Assets/background/Food.jpg'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; 
import "../css/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials,setcredentials]=useState({email:"",password:""})
  let navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("https://foodie-lyart-omega.vercel.app/api/loginuser",{
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
      alert("You have logged in!")
      navigate('/home')
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
    }
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }


  return (
    <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
      <div className="container vh-100 ">
        <div className="row justify-content-center ">
          <div className="col-md-6 p-5 mt-5  ">
            <div className="card bg-transparent ">
              <div className="card-header rounded p-1  text-white">
                <h1 className="text-center">Login...</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group input-container mb-5">
                    <label htmlFor="email" className="text-white fs-3">Email:</label>
                    <input type="email" placeholder="Enter email" className="form-control  white-text text-white" id="email" name="email" value={credentials.email} onChange={onChange}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid #fff' ,
                        
                      }}/>
                  </div>
                  <div className="form-group">
      <label htmlFor="password" className="text-white fs-3">
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
                  <button type="submit" className="mt-4 ms-2 btn btn-danger btn-block">
                    Log in
                  </button>
                </form>
              </div>
              <div className="text-center mt-3">
                <p className="text-white">
                  Don't have an account? <Link to="/signup" className="text-decoration-none  ms-3 " style={{color:'brown'}}>Sign Up</Link>
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