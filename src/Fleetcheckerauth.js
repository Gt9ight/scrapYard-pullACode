
import React from "react";
import './Authentication.css'
import FleetCheckerSigninForm from '../fleetcheckersignup/FleetCheckerSignupForm';
import FleetCheckerSignupForm from '../fleetcheckersignin/FleetCheckerSigninForm';

const Authentication = () => {



    return(
        <div>
            <div className="authtitle">
            <h1>Fleet-Manager Sign In</h1>
            </div>
            <div className="authentication-container">
            
            <FleetCheckerSignupForm />
            <FleetCheckerSigninForm />
            </div>
        </div>
    );
};

export default Authentication;