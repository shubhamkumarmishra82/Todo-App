import React, { useState } from "react";
import "../styles/login.css";
import LoginValidates from "../utils/LoginValidates";
import { Link, useNavigate } from "react-router-dom";

function Login({setLogin}) {
  const navigate = useNavigate()
  
  const [formData , setFormData] = useState({
    email : "" ,
    password : ""
  })
  const [error , setError] = useState({})
  const handleOnChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
    
  }
  const handleOnSubmit = (e)=>{

      e.preventDefault()
      const validateError = LoginValidates(formData)
      setError(validateError)
      if(Object.keys(validateError).length===0){
        fetch("http://localhost:9090/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
.then(res => {
  if (!res.ok) {
    throw new Error("Invalid email or password");
  }
  return res.text();
})
.then(token => {
  localStorage.setItem("token", token);
  localStorage.setItem("login", "true");
  localStorage.setItem("email" , formData.email)
  setLogin(true);
  navigate("/dashboard");
})
.catch(err => {
  alert(err.message);
});
      }
     

    }
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleOnSubmit}>
        <h2>Login</h2>

        <input type="email" placeholder="Email" name="email" onChange={handleOnChange} />
         {error.email && (
          <p className="text-danger">{error.email}</p>
         )}
        <input type="password" placeholder="Password" name="password" onChange={handleOnChange}/>
         {error.password && (
          <p className="text-danger">{error.password}</p>
         )}

        <button type="submit">Login</button>
        <button><Link to={"/register"} className="text-light my-2 text-decoration-none">Create Account</Link></button>
         

        <p className="text">Welcome back 👋</p>
      </form>
    </div>
  );
}

export default Login;