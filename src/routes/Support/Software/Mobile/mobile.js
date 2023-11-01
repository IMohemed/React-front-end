import React,{useEffect} from "react";
//import img from '../../../../Assets/service.jpeg';
import img1 from '../../../../Assets/mad.jpeg';
//import img2 from '../../../../Assets/mobile.jpeg';
//import img3 from '../../../../Assets/pos.jpeg';
import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './mobile.css';

function Mobile(){
  React.useEffect(() => {       window.scrollTo({left:0,top: 0,behavior: "smooth"});     }, []);
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="mobile container section">
            <div className="contain">
              <h1>Mobile App Development</h1>
              <div data-aos='fade-up' className="image">
                <img src={img1} alt=""/>
              </div>
              <div className="text">
                <p data-aos='fade-up'>
                In 2015, we expanded our horizons stepping up into mobile application developmant which has now become one of the most popular facet inthe software industry.
                within the year ,we were able to win theconfidence of 5 strong and reliable customersand were capable of delivering a set of successful mobile
                applicationsthat satisfired thier needs.
                 <br/><br/>
                 The mobile applications have been developed solely by the creative minds of our incredibly talented team and they are availble and open for any 
                 suggestions or improvement that can be made as well as for suitable upgradesfor an implemented mobile app.
                 <br/><br/>
                 Even if the client wants an update for the application ,they are more than welcoe to craft the proposals and their wish will be our command,for any level of modification
                 that is requested
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

export default Mobile;