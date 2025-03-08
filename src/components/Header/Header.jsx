import "./Header.scss";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router";
import "../../common.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Cookies from "js-cookie";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  function BurgerMenu() {
    document.getElementById("links").classList.toggle("visible");
    document.getElementById("buttons").classList.toggle("visible");
    document.getElementById("header").classList.toggle("height");
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("rotate");
    document.getElementById("close").classList.toggle("visible");
    document.getElementById("close").classList.toggle("rotate");
  }
  return (
    <>
      <div className="header" id="header">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <button id="close" onClick={() => BurgerMenu()}>
            X
          </button>
          <button id="menu" onClick={() => BurgerMenu()}>
            III
          </button>
        </div>
        <div
          className="links"
          id="links"
          onClick={() => {
            if (window.innerWidth < 575.98) {
              BurgerMenu();
            }
          }}
        >
          <Link className="link cLink" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link cLink" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link cLink" to="/?cat=tecnology">
            <h6>TECNOLOGY</h6>
          </Link>
          <Link className="link cLink" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link cLink" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link cLink" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
        </div>
        <div
          className="buttons"
          id="buttons"
          onClick={() => {
            if (window.innerWidth < 575.98) {
              BurgerMenu();
            }
          }}
        >
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Log out</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="cLink" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
