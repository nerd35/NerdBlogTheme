import React from "react";
import { LoginComponent } from "../../components";

const LoginScreen = () => {
  return (
    <div className="container py-5 mt-5 ">
        <div className="py-5 mt-5 notfound-widget">
              <div className="auth-widget-title">
                  <h5>Login</h5>
              </div>

              <LoginComponent/>
              
          </div>
    </div>
  );
};

export default LoginScreen;
