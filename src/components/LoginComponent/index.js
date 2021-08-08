import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LoginComponent = () => {
  return (
    <form className="form-widget">
      <div className="mb-3 form-group">
        <input type=" text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <input type=" password" className="form-control" placeholder="Password" />
      </div>
      <div className="mt-5 auth-control">
    <div className="custom-control custom-check">
        <input type="checkbox" id="rememberme" className="custom-comtrol-input" />
        <label for="rememberme" className="custom-control-label ms-3">Remember me</label>
      </div>
      <Link className="click-link" to='/'>Forget Password?</Link>
      </div>
      <div className="mt-5 form-group">
          <button className="btn-suth-custom" type="submit">Login</button>
      </div>
      <p className="mt-3 text-center form-group option-section">
          Don't have an account?
          <Link to='/register' className="option-link">Create One</Link>
      </p>
    </form>
  );
};

export default LoginComponent;
