
import React from "react";
import './Authentication.css'
import TechnicianSignin from '../techniciansignin/TechnicianSignin'
import TechnicianSignup from '../TechnicianSignup/TechnicianSignup'

const Authentication = () => {



    return(
        <div>
        <div className="authtitle">
        <h1>Technician Sign In</h1>
        </div>
        <div className="authentication-container">
        
            <TechnicianSignin />
            <TechnicianSignup />
        </div>
            </div>
    );
};

export default Authentication;