import React from 'react'
import RegisterComponent from '../../components/RegisterComponent';

const RegisterScreen = () => {
    return (
      <div className="container py-5 mt-5 ">
          <div className="py-5 mt-5 notfound-widget">
                <div className="auth-widget-title">
                    <h5>Sign up</h5>
                </div>
  
                <RegisterComponent/>
                
            </div>
      </div>
    );
  };
  
  export default RegisterScreen;
