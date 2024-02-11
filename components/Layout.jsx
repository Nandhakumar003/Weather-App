import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="container-flex">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
