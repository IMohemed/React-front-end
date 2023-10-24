import React,{useEffect} from "react";
import img from '../../Assets/Contact.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';


function Products(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="products">
          <div className='overlay'></div>
          <div className="imageContainer">
             <img alt="image" src={img}/>
             <div className="partText">
                <h1>Contact Us</h1>
                <p>We Provide best service for our customers</p>
             </div>
          </div>
          <div className="fromContainer">
            <h1>Send a Message To Us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows='4'></textarea>
                <button className="btn">Send Message</button>
            </form>
          </div>
          </div>
          <Footer/>
        </>
    )
}

export default Products;