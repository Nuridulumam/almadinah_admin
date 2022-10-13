import { Navigate } from "react-router-dom";
import  SimpleSidebar  from "../layouts/MainLayout"

const PrivateRoutes = () => {
  let auth = {token: true}
  return (
      auth.token ? <SimpleSidebar></SimpleSidebar> : <Navigate to={"/"} />
  );
};

export default PrivateRoutes;
