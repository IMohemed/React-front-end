import React from "react";
import Navbar from '../../components/Navbar/Navbar'; 
import img from '../../Assets/network.jpeg';
import './partners.css';

function Partners(){
    return(
        <>
         <Navbar/>
         <div className="partners">
            <img alt="image" src={img}/>
            <div className="partText">
                <h1>About Us</h1>
                <p>We Provide best service for our customers customers</p>
            </div>
         </div>
        </>
    )
}

export default Partners;