import React,{useEffect} from "react";
import Navbar from '../../components/Navbar/Navbar'; 
import img from '../../Assets/about.jpg';
import img1 from '../../Assets/history.jpeg';
import img2 from '../../Assets/mission.jpeg';
import img3 from '../../Assets/vision.jpeg';
import './partners.css';
import Footer from '../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Partners(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
         <Navbar/>
         <div className="partners">
         <div className='overlay'></div>
           <div className="imageContainer">
             <img alt="imge" src={img}/>
             <div className="partText">
                <h1>About Us</h1>
                <p>We Provide best service for our customers customers</p>
             </div>
            </div>
            <div className="aboutContainer">
             
             <div className="partText">
                <div data-aos='fade-up' className="first">
                <div  className="contain">
                <h1 > Our History</h1>
                <p>A software company, also known as a software development company or software vendor, 
                    is an organization or business that specializes in designing, developing, testing,
                    and maintaining software applications, programs, and solutions. Here's a description of a software company
                    A software company is a technology-focused organization that plays a vital role in the digital age.
                     It is dedicated to creating and delivering software products and services that serve a wide range 
                     of industries and user needs. Key aspects of a software company's operations include
                </p>
                </div>
                <img src={img1} alt="img"/>
                </div>

                <div data-aos='fade-up' className="second">
                <div  className="contain">
                <h1 >Our Mission</h1>
                <p>A mission statement for a software company provides a clear and concise declaration of the company's purpose, goals, and values.
                     It serves as a guiding principle for the company's actions and decisions.
                      Here's a sample mission statement for a software companyAt XYZ Software, Inc.
                      , our mission is to empower businesses and individuals with innovative 
                      software solutions that enhance productivity,
                       drive growth, and simplify complex tasks. We are committed to
                </p>
                </div>
                <img src={img2} alt="img"/>
                </div> 

                <div data-aos='fade-up' className="third">
                <div className="contain">
                <h1 >Our Vision</h1>
                <p>We Provide best service for our customers customers A vision statement for a 
                    company outlines the long-term aspirations and goals that the organization aims to achieve.
                     It provides a clear picture of what the company envisions for its future. 
                     Here's a sample vision statement for a software compan
                </p>
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

export default Partners;