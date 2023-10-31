import React,{useEffect} from "react";
//import img from '../../../../Assets/service.jpeg';
import img1 from '../../../../Assets/pos1.jpeg';
//import img2 from '../../../../Assets/mobile.jpeg';
//import img3 from '../../../../Assets/pos.jpeg';
import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './pos.css';

function Pos(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="poss container section">
            <div className="contain">
              <h1>Point of Sale Software System</h1>
              <div data-aos='fade-up' className="image">
                <img src={img1} alt=""/>
              </div>
              <div className="text">
                <p data-aos='fade-up'>
                Hotel management refers to the efficient operation and administration of a hotel or a similar establishment to ensure
                 a seamless and satisfying experience for guests. It encompasses a wide range of tasks, including guest services,
                 staff management, facility maintenance, and financial management. Here's a detailed description of hotel management
                 <br/><br/>
                 2015 has undoubtedl been a busy year in providing the best software Sollution for the hotel industry.For managing Hotels 
                 and Restuarents we have introduced a customized software system for the convinience of our valuable customers.
                 <br/><br/>
                 Within a single year of processing this product, wehave been able to score an impressive 25 important clients and among them are Ransara, In and Out, Hangout,
                 WhiteHouse,Milano ,Little Hut, and Hands Dreams.
                 <br/><br/>
                 The software is specialized for these of Hotels and restuarents, and we ,the dedicated team at OnimtaIT, are willing to customize the
                 product for you ,according to your wishes of how your working environment should be.Our expertise will provide you 
                 with exceptional service and satisfaction at the end of the day.
                 <br/><br/>
                </p>
              </div>
            </div>
          </div>
          <Footer/>
        </>
    )

}

export default Pos;