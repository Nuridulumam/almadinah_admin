import { Route, Routes as ReactRoutes } from "react-router-dom";

import Login from "./pages/auth"
import NotFound from "./pages/errors/notFound";
import Dashboard from "./pages/dashboard"
import Santri from "./pages/santri";

import PrivateRoutes from "./utils/PrivateRoutes";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path={"/"} element={<Login />} />
      <Route element={<PrivateRoutes/>}>
        <Route path={"/dashboard"} element={<Dashboard />}/>
        <Route path={"/santri"} element={<Santri />}/>
        <Route path={"*"} element={<NotFound /> }/>
      </Route>
    </ReactRoutes>
  );
}