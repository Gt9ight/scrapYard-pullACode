import React from "react";
import './home.css'
import { Link } from "react-router-dom";
import InfoCards from "../../info-cards/InfoCards";


const Home = () => {
    return (

        
        <div className="menu-container">
           
            <h1 className="title">WELCOME TO YOUR fLEET MANGER</h1>
            <InfoCards />
            <div className="fleet-checker">
                <Link className="fleet-checkerbutton" to='/fleetcheckerauth' >Fleet Checker</Link>
                </div>
                <div className="technician">
                    <Link className="technicianbutton" to='/technicianauth'>Technician</Link>
                </div>
        </div>
    )
}

export default Home;