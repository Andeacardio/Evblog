import "./Register.scss";
import "../../common.scss";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error,setError] = useState(null)
  const  navigate = useNavigate()
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
      console.log(res.data);
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }

  };
  return (
    <>
      <div className="register">
        <div className="auth">
          <h1>Register</h1>
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
              type="email"
              placeholder="email"
              name="email"
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
              Register
            </button>
            {error && <p>{error}</p>}
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
