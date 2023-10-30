import React,{useEffect} from "react";
import img from '../../../Assets/surv1.jpg';
import img2 from '../../../Assets/surv2.jpg';
import img3 from '../../../Assets/surv3.jpeg';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './survilience.css';

function Survilience(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="survilience">
          <div className='overlay'></div>
          <div className="imageContainer">
             <img alt="imge" src={img}/>
             <div className="partText">
                <h1>Survilience Management</h1>
                <p>We Provide best service for our customers</p>
             </div>
          </div>
          <div className="content">
            <div data-aos='fade-up' className="contSec">
            <div className="imgContainer">
              <img src={img} alt=""/>
            </div>
            <div className="contContainer">
              <h1>Security Cameras</h1>
              <p>
                Security cameras, also known as surveillance cameras or closed-circuit television (CCTV) cameras, are devices designed to capture and record visual information for the purpose of monitoring and enhancing security in various environments. They are commonly used in homes, businesses, public spaces, and government facilities. Here's a detailed description of security cameras:
              </p>
            </div>
            </div>
            <div data-aos='fade-up' className="contSec">
            <div className="imgContainer">
              <img src={img2} alt=""/>
            </div>
            <div className="contContainer">
              <h1>Recording Sollutions</h1>
              <p>
                Recording solutions encompass a wide range of technologies and tools that enable the capture, storage, and management of audio, video, and other types of data for various purposes. These solutions are used in various industries, including entertainment, education, business, and security. Here is a detailed description of recording solutions: 
              </p>
            </div>
            </div>
            <div data-aos='fade-up' className="contSec">
            <div className="imgContainer">
              <img src={img3} alt=""/>
            </div>
            <div className="contContainer">
              <h1>Software Sollutions</h1>
              <p>Software solutions, often referred to as software applications or simply software, are computer programs designed to perform specific tasks, functions, or solve particular problems for individuals, businesses, or organizations. They play a fundamental role in modern technology and are used in a wide range of applications across various industries. Here's a detailed description of software solutions:</p>
            </div>
            </div>
          </div>
          {/* <div className="fromContainer">
            <h1>Send a Message To Us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows='8'></textarea>
                <button className="btn">Send Message</button>
            </form>
          </div> */}
          </div>
          <Footer/>
        </>
    )

}

export default Survilience;