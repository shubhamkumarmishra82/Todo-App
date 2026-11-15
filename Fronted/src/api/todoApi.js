const fecthData = async () =>{
     const response = await fetch("http://localhost:9090/api/todos/getitem" ,{
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
     })
     return response.json()
}
export default fecthData ;

export const fetchDataById = async (id) =>{
  const response = await fetch(`http://localhost:9090/api/todos/getitem/${id}` , {
    method : "GET",
    headers : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token")
    }
  })
  return response.json()
} 

export const deleteById = (id)=>{
  const response = fetch(`http://localhost:9090/api/todos/delete/${id}` , {
    method : "DELETE",
    headers : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token")
    }
  })
  return response
}
