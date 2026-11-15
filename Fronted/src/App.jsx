import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import ProtectedRoute from "./components/ProtectedRoute";
import UpdateTodo from "./components/UpdateTodo";

const App = () => {
 const [login, setLogin] = useState(null)

useEffect(() => {
  const savedLogin = localStorage.getItem("login");
  setLogin(savedLogin === "true");
}, []);

  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Login setLogin={setLogin} />} />
      <Route path="/register" element={<Register />} />

      {/* protected route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute login={login}>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="addtodo" element={<AddTodo />} />
        <Route path="updatetodo/:id"  element={<UpdateTodo/>}/>
      </Route>
    </Routes>
  );
};

export default App;