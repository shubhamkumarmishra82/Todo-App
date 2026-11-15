import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fecthData, { deleteById } from '../api/todoApi';
import { todoAction } from '../store/todoSlice';
import { useNavigate } from 'react-router-dom';
import Welcome from './Welcome';
import Spinner from './Spinner';
const Home = ()=>{
  const [loading , setLoading] = useState(true)
 const dispatch = useDispatch()
 const navigate = useNavigate();
 const {todos} = useSelector(store=>store.todo)
useEffect(() => {
  setLoading(true)
   const loadData = async () => {
      const data = await fecthData();
      dispatch(todoAction.getData(data));
      setLoading(false)
   }
   loadData();
}, []);
 const handleOnDelete =  async (id)=>{
   const data = await deleteById(id)
     if (data.ok) {
        dispatch(todoAction.deleteDataById(id));
        alert("Todo Deleted Successfully");
    } else {
        alert("Delete Failed");
    }
 }
 if (loading) {
  return <Spinner />;
}

if (!loading && todos.length === 0) {
  return <Welcome />;
}

return (
  <div className="table-container">
    <div className=" table-scroll">
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-dark sticky-top">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.priority}</td>
              <td>{todo.description}</td>
              <td>{todo.duedate}</td>
              <td>{todo.status}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() =>
                    navigate(`/dashboard/updatetodo/${todo.id}`)
                  }
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleOnDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
}
export default Home;