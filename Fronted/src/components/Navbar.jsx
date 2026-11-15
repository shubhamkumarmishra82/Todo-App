import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebars from './Sidebars';
import { useNavigate } from 'react-router-dom';
const Navbar = ()=>{
  const navigate = useNavigate()
  const handleOnLogout = () => {
  localStorage.removeItem("token"); 
  navigate("/");       
};
  return <>
  <header>
   <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <div className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <p className="form-control px-5">Todo-App</p>
        </div>

        <div className="text-end">
          <button type="button" className="btn btn-light text-dark me-2">{localStorage.getItem("email")}</button>
          <button type="button" className="btn btn-primary" onClick={handleOnLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
  
  </>

}
export default Navbar;