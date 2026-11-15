import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebars from "./Sidebars";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebars />
        <div className="flex-grow-1 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;