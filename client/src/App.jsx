import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Authenticate from "./pages/Authenticate";
import Rooms from "./pages/rooms/Rooms";
import ActivatePage from "./pages/activate/Active";
import axios from "axios";
let auth = false;
let user = {
  activated: true,
};
axios.defaults.baseURL="http://localhost:8080"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route element={<GuestRouter />}>
          <Route path="/authenticate" element={<Authenticate />} />
        </Route>
        <Route element={<SemiProtected />}>
          <Route path="/activate" element={<ActivatePage />} />
        </Route>
        <Route element={<Protected />}>
          <Route path="/rooms" element={<Rooms />} />
        </Route>
      </Routes>
    </>
  );
};
const GuestRouter = () => {
  return auth && user.activated ? <Navigate to="/rooms" /> : <Outlet />;
};
const SemiProtected = () => {
  return !auth ? (
    <Navigate to="/" />
  ) : auth && !user.activated ? (
    <Outlet />
  ) : (
    <Navigate to="/rooms" />
  );
};

const Protected = () => {
  return !auth ? (
    <Navigate to="/" />
  ) : auth && user.activated ? (
    <Outlet />
  ) : (
    <Navigate to="/activate" />
  );
};

export default App;
