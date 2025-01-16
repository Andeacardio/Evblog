import "./Login.scss";
import "../../common.scss";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="auth">
          <h1>Login</h1>
          <form>
            <input required type="text" placeholder="username" />
            <input required type="password" placeholder="password" />
            <button className="cButton">Login</button>
            <p>Something is wrong! Try again!</p>
            <span>
              Don`t you have an account? <Link to="/register">Register</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
