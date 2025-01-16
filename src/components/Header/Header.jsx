import "./Header.scss";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router";
import "../../common.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="links">
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
          <div className="buttons">
            <span>John</span>
            <span>Log out</span>
            <span className="write">
              <Link className="cLink" to="/write">
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
