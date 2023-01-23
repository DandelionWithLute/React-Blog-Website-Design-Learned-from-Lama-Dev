import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
  return ( 
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Email</label>
        <input type='email' className="registerInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type='password' className="registerInput" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  );
}
