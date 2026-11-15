import { useNavigate } from "react-router-dom";

const Welcome = ()=>{
  const navigate = useNavigate()
  return <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-light">Welcome on Dashboard !</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text-light">There are no records available at the moment. You can start by adding your first todo and organize your tasks efficiently.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-success btn-lg px-4 gap-3" fdprocessedid="42cvvh" onClick={()=> navigate("/dashboard/addtodo")}>AddTodo</button>
      </div>
    </div>
  </div>
}
export default Welcome;