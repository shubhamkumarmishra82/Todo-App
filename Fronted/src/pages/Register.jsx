import React, { useState } from "react";
import "../styles/form.css";
import validates from "../utils/validates"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const [formData , setFormData] = useState({
    name : "",
    email : "" , 
    password : ""
  })
  const [error , setError] = useState({})
  const handleOnChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleOnSubmit = (e)=>{
    e.preventDefault()
    const validatesError = validates(formData)
    setError(validatesError)
    if(Object.keys(validatesError).length===0){
      fetch("http://localhost:9090/api/auth/register" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
      })
      .then((res)=>res.text())
      .then((data)=>{
        alert(data)
        navigate("/")
      }) 
        .catch((error)=>{
        alert("something went wrong")
      })
    }
   
  }
  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleOnSubmit}>
        <h2>Register</h2>

        <input type="text" placeholder="Name" name="name" required onChange={handleOnChange}/>
        {error.name &&  (
          <p className="text-danger">{error.name}</p>
        )}

        <input type="email" placeholder="Email" name="email" required onChange={handleOnChange} />
        {error.email && (
          <p className="text-danger">{error.email}</p>
        )}

        <input type="password" placeholder="Password" name="password" required onChange={handleOnChange}/>
        {error.password &&  (
          <p className="text-danger">{error.password}</p>
        )}

        <button type="submit" className="mb-1">Submit</button>
        <button><Link to={"/"} className="text-light my-1 text-decoration-none">Back</Link></button>
      </form>
    </div>
  );
}

export default Register;