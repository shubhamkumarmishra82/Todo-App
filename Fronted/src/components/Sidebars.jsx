import 'bootstrap/dist/css/bootstrap.min.css'
import {  NavLink } from 'react-router-dom';
const Sidebars = ()=>{
  return <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "200px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
     <NavLink
  to="/dashboard"
  end
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link text-light"
  }
>
  Home
</NavLink>
      </li>
      <li>
     <NavLink
  to="/dashboard/addtodo"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link text-light"
  }
>
  Add Todo
</NavLink>
      </li>
    </ul>
  </div>
}
export default Sidebars;