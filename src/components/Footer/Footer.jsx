import "./Footer.scss";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={Logo} alt="logo" />
        <span> &copy; EVblog</span>
      </div>
    </>
  );
};

export default Footer;
