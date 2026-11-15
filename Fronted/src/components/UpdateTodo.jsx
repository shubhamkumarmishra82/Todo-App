import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { todoAction } from "../store/todoSlice";
import { fetchDataById } from "../api/todoApi";

const UpdateTodo = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const {todos} = useSelector(store=>store.todo)
    const {selectTodos} = useSelector(store=>store.todo)
    const navigate = useNavigate()
    const [todo, setTodo] = useState({
        title: "",
        priority: "",
        description: "",
        duedate: "",
        status: "PENDING"
    });

    useEffect(() => {
           const loadData = async ()=>{
            const data = await fetchDataById(id)
            dispatch(todoAction.getDataById(data))
           }
           loadData()
    }, [id]);
   useEffect(()=>{
    setTodo(selectTodos)
   } , [selectTodos])
    const handleChange = (e) => {

        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch(`http://localhost:9090/api/todos/update/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },

            body: JSON.stringify(todo)

        });

        if (response.ok) {
            alert("Todo Updated Successfully");
            navigate("/dashboard")
        } else {
            alert("Update Failed");
        }
    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h3 className="text-center mb-4">
                    Update Todo
                </h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Title</label>

                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={todo.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Priority</label>

                        <select
                            className="form-select"
                            name="priority"
                            value={todo.priority}
                            onChange={handleChange}
                        >
                            <option value="">Select Priority</option>
                            <option value="LOW">Low</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HIGH">High</option>
                        </select>
                    </div>

                    <div className="mb-3">

                        <label className="form-label">Description</label>

                        <textarea
                            className="form-control"
                            rows="5"
                            name="description"
                            value={todo.description}
                            onChange={handleChange}
                        ></textarea>

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Due Date</label>

                        <input
                            type="date"
                            className="form-control"
                            name="duedate"
                            value={todo.duedate}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Status</label>

                        <select
                            className="form-select"
                            name="status"
                            value={todo.status}
                            onChange={handleChange}
                        >
                            <option value="PENDING">Pending</option>
                            <option value="COMPLETED">Completed</option>
                        </select>

                    </div>

                    <button className="btn btn-primary w-100">
                        Update Todo
                    </button>

                </form>

            </div>

        </div>
    );
};

export default UpdateTodo;