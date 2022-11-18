import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./style.css";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onEmail = (event) => {
    setEmail(event.target.value);
  };
  const onPassword = (event) => {
    setPassword(event.target.value);
  };
  const logIn = async () => {
    const loginUser = { email: email, password: password };

    console.log(loginUser);
    const response = await axios.post("http://localhost:4000/login", loginUser);
    console.log(response);
  };
  return (
    <div>
      <h1>Login</h1>
      <p className="styleTxt">Please login using account detail bellow.</p>
      <p className="styleTxt">Email Address</p>
      <input type="text" onChange={onEmail} value={email}></input>
      <p className="styleTxt">Password</p>

      <input type="password" onChange={onPassword} value={password}></input>
      <p className="styleTxt">Forgot your password?</p>
      <button onClick={logIn} className="styleBtn">
        login
      </button>
      <p className="styleTxt">
        Don’t have an Account?
        <NavLink to="/signup">
          <p className="styleTxt">Create account</p>
        </NavLink>
      </p>
    </div>
  );
};
export default Login;
