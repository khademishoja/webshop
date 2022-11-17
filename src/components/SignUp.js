import { useState } from "react";
import axios from "axios";
import "./style.css";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alarm, setAlarm] = useState("");
  const onEmail = (event) => {
    setEmail(event.target.value);
  };
  const onPassword = (event) => {
    setPassword(event.target.value);
  };
  const onConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const createUser = async (user) => {
    console.log(user);
    const response = await axios.post("http://localhost:4000/users", user);
    console.log(response);
    setAlarm(<p style={{ color: "green" }}>User is created.</p>);
  };

  const onSignUp = () => {
    const newUser = {
      name: email,
      email: email,
      password: password,
    };
    if (newUser.password !== confirmPassword) {
      setAlarm(<p style={{ color: "red" }}>"your password is not same"</p>);
    } else {
      createUser(newUser);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <p className="styleTxt">Welcome! Create an account</p>
      <p className="styleTxt">Email Address</p>
      <input type="text" onChange={onEmail} value={email}></input>
      <p className="styleTxt">Password</p>
      <input type="password" onChange={onPassword} value={password}></input>
      <p className="styleTxt">Repeat password</p>
      <input
        type="password"
        onChange={onConfirmPassword}
        value={confirmPassword}
      ></input>
      <div>
        <button onClick={onSignUp} className="styleBtn">
          Sign Up
        </button>
        <p className="styleTxt">
          Already have an account? <NavLink to="/login">Login</NavLink>{" "}
        </p>
      </div>
      <div>{alarm}</div>
    </div>
  );
};

export default SignUp;
