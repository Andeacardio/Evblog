import "./layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet /> {/* This is where child routes will be rendered */}
      <Footer />
    </div>
  );
}

export default Layout;
