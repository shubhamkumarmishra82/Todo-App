const validates = (values)=>{
  let newError = {}
  if(!values.name || values.name.length < 3){
    newError.name = "Name must be at least 3 characters"
  }
   else if(!values.email || !values.email.includes("@")){
    newError.email = "Please enter a valid email"
  }
   else if(!values.password || values.password < 6){
    newError.name = "Name must be at least 6 characters"
  }
  return newError;
}
export default validates;