const TodoValidates = (values)=>{
  let newError = {}
   const today = new Date().toISOString().split("T")[0];
  if(!values.title || values.title.trim().length< 5){
    newError.title = "Title must be at least 5 character"
  }
   if(!values.description || values.description.trim().length<50){
    newError.description = "description must be at least 50 character"
  }
   if(!values.duedate || values.duedate<today){
    newError.duedate = "date can not be in the Past"
  }
  return newError;
}
export default TodoValidates;