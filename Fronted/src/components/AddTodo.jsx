import { useState } from "react";
import TodoValidates from "../utils/TodoValidates";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const navigate = useNavigate();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "Medium",
    duedate: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const validateError = TodoValidates(todo);
    setError(validateError);

    if (Object.keys(validateError).length !== 0) return;

    try {
      const res = await fetch("http://localhost:9090/api/todos/additem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(todo),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg);
      }

      const data = await res.json();
      

      alert("Todo Added Successfully");
      navigate("/dashboard");

    } catch (error) {
      console.log(error);
      alert("Failed: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Add Todo</h3>
            </div>

            <div className="card-body">
              <form onSubmit={handleOnSubmit}>

                <div className="mb-3">
                  <label>Todo Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={todo.title}
                    onChange={handleChange}
                  />
                  {error.title && <p className="text-danger">{error.title}</p>}
                </div>

                <div className="mb-3">
                  <label>Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    value={todo.description}
                    onChange={handleChange}
                  />
                  {error.description && (
                    <p className="text-danger">{error.description}</p>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Priority</label>
                    <select
                      name="priority"
                      className="form-select"
                      value={todo.priority}
                      onChange={handleChange}
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Due Date</label>
                    <input
                      type="date"
                      name="duedate"
                      className="form-control"
                      value={todo.duedate}
                      onChange={handleChange}
                    />
                    {error.duedate && (
                      <p className="text-danger">{error.duedate}</p>
                    )}
                  </div>
                </div>

                <button className="btn btn-success w-100 mt-3">
                  Add Todo
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;