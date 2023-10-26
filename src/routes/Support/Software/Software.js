import React,{useEffect} from "react";
import img from '../../../Assets/software1.jpg';
import img1 from '../../../Assets/hotel.jpg';
import img2 from '../../../Assets/mobile.jpeg';
import img3 from '../../../Assets/pos.jpeg';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './software.css';

function Software(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="software">
          <div className='overlay'></div>
          <div className="imageContainer">
             <img alt="imge" src={img}/>
             <div className="partText">
                <h1>Software Manament</h1>
                <p>We Provide best service for our customers</p>
             </div>
          </div>
          <div className="aboutContainer">
             
             <div className="partText">
                <div data-aos='fade-up' className="first">
                <div  className="contain">
                <h1 > Managing Hotels and Restuarents</h1>
                <p>The software is specialized for the use of Hotels and Restaurants, 
                    and we, the dedicated team at Pacific Code, are willing to customize 
                    the product for you,
                     according to your wishes of how your working environment should be.
                </p>
                <button className='btn flex'>
                  LEARN MORE
                </button> 
                </div>
                <img src={img1} alt="img"/>

                </div>

                <div data-aos='fade-up' className="second">
                <div  className="contain">
                <h1 >Mobile Applications Development</h1>
                <p>The mobile applications have been developed solely by the creative
                     minds of our incredibly talented team and they are both available 
                     and open for any suggestions or improvements that
                     can be made as well as for suitable upgrades for an implemented mobile app. to
                </p>
                <button className='btn flex'>
                  LEARN MORE
                </button> 
                </div>
                <img src={img2} alt="img"/>
                </div> 

                <div data-aos='fade-up' className="third">
                <div className="contain">
                <h1 >Point Of Sale Software System</h1>
                <p>Our initial acquaintance at the industry of Software was with
                     the Point Of Sale software system which we designed and implemented 
                     to be the only 
                    POS system with the most number of features available at the point of sales.
                </p>
                <button className='btn flex'>
                  LEARN MORE
                </button> 
                </div>
                <img src={img3} alt="img"/>
                </div>
             </div>
            </div>
          
          </div>
          <Footer/>
        </>
    )

}

export default Software;