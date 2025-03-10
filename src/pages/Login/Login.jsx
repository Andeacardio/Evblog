import "./Login.scss";
import "../../common.scss";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { currentUser, login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <>
      <div className="login">
        <div className="auth">
          <h1>Login</h1>
          <form>
            <input
              required
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
            <input
              required
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button className="cButton" onClick={handleSubmit}>
              Login
            </button>
            {error && <p>{error}</p>}
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
