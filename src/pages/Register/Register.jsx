import "./Register.scss";
import "../../common.scss";
import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="auth">
          <h1>Register</h1>
          <form>
            <input required type="text" placeholder="username" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <button className="cButton">Register</button>
            <p>Something is wrong! Try again!</p>
            <span>
              Do you have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
