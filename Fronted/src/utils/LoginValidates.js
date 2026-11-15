const LoginValidates = (values)=>{
  let newError = {}
  if(!values.email){
    newError.email = "Email Field is Required"
  }
  else if(!values.password){
    newError.password = "Password Field is Required"
  }
  return newError
}
export default LoginValidates;