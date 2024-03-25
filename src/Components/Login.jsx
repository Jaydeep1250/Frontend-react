import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const handleChanges = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        
          const item = { email: login.email, password: login.password }
         
            console.log(item);
    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleChanges(e)}
            className="form-control"
            name="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => handleChanges(e)}
            className="form-control"
            name="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <li><Link to="/signup">Signup</Link></li>
    </div>
  );
};

export default Login;
