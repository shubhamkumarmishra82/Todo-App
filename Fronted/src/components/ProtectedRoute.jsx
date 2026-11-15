import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ login, children }) => {
  if (login === null) return null; 

  return login ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;