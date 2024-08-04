import React, { useState } from "react";

function LoginSingup() {
  const [action, setAction] = useState(true);

  return (
    <div className="page-container">
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={action ? 'active' : ''} onClick={() => setAction(true)}>Login</button>
          <button className={!action ? 'active' : ''} onClick={() => setAction(false)}>Sign up</button>
        </div>
        {action ? (
          <div className="form">
            <h2  className="form-heading">Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <a href="#">Forgot Password?<span className="click"> Click here</span></a>
            <button>Login</button>
            <p className="sign-up">Not a Member? <a href="#" onClick={() => setAction(false)}><span className="click">Sign up</span></a></p>
          </div>
        ) : (
          <div className="form">
            <h2  className="form-heading">Sign up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <button>Sign up</button>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default LoginSingup;
