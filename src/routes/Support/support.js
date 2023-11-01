import React,{useEffect} from "react";
import img from '../../Assets/service.jpeg';
import img1 from '../../Assets/onimta1.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './support.css';

function Support(){
  React.useEffect(() => {       window.scrollTo({left:0,top: 0,behavior: "smooth"});     }, []);
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="service">
          <div className='overlay'></div>
          <div className="imageContainer">
             <img alt="imge" src={img}/>
             <div className="partText">
                <h1>Our Service</h1>
                <p>We Provide best service for our customers</p>
             </div>
          </div>
          <div className="content">
          <div data-aos='fade-up' className="contSec">
            <div className="imgContainer">
              <img src={img1} alt=""/>
            </div>
            <div className="contContainer">
              <h1>Onimta Information Technology</h1>
              <p>
                was established in the year 2008 as a private company to provide perfect software sollutions and services to the local market. We arehappy to mention that we have already
                insatalled our roduct to over two hundred customer location during past six years, 
                including leading bussiness organizations in Sri Lanka.
              </p>
            </div>
            </div>
          </div>
          </div>
          <Footer/>
        </>
    )

}

export default Support;