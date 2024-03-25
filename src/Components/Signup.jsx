import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();

    const [signup, setsignup] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      });

      const { first_name, last_name, email, password } = signup;
      const handle_signup = (e) => {
        setsignup({ ...signup, [e.target.name]: e.target.value });
      };

      const onSignupSubmit = (e) => {

        e.preventDefault();
        
          const item = { first_name: signup.first_name, last_name: signup.last_name, email: signup.email, password: signup.password }
         
            console.log(item);
        }
      
  return (
    <div>
      <form onSubmit={onSignupSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name="first_name" id="first_name" onChange={(e) => handle_signup(e)} value={first_name}
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" name="last_name" id="last_name" onChange={(e) => handle_signup(e)} value={last_name} className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email" id="email" onChange={(e) => handle_signup(e)} value={email}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password" id="password" onChange={(e) => handle_signup(e)} value={password}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/">sign in?</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
