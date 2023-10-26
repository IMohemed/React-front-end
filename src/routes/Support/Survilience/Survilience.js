import React,{useEffect} from "react";
import img from '../../Assets/service.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './support.css';

function Support(){
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
                <h1>Survilience Management</h1>
                <p>We Provide best service for our customers</p>
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

export default Support;