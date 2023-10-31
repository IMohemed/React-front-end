import React,{useEffect} from 'react';
import './Footer.css';
import img1 from '../../Assets/foot.png';
import{FiChevronRight, FiSend} from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      {/* <div className='overlay'></div> */}
      {/* <div className='imageDiv'>
      <img src={img1} alt='imag'/>
      </div> */}
      <div className='secContent container'>
        
        <div className='footerCard flex'>
        {/* <div className='contactDiv flex'>
          <div  className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Join with Us</h2>
          </div>
          <div className='inputDiv flex'>
            <input  type='text' placeholder='Enter Email Address'/>
            <button  className='btn flex' type='submit'>
              SEND<FiSend className='icon'/>
            </button>
          </div>
        </div> */}
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <h1 className='logo flex'> 
                Pacific Code
                </h1>
            </div>
            <div  className='footerParagraph'>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Perspiciatis laudantium hic doloremque 
              similique id, voluptate error ab architecto 
              quia et rerum aliquam in quasi blanditiis nam, 
              porro accusantium. Ea, unde!
              </p>
            </div>
            <div  className='footerSocials'>
              <AiFillFacebook className='icon'/>
              <AiFillInstagram className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiOutlineTwitter className='icon'/>
            </div>
          </div>

          <div className='footerLinks grid'>
            <div  className='linkGroup'>
              <span className="groupTitle">
                Our Company
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Home
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                About Us
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our Projects
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Contact Us
              </li>
            </div>
            <div  className='linkGroup'>
              <span className="groupTitle">
                Location
              </span>
              <div className='footerList1 flex'>
                <p >41/3Lake Road Maharagama</p>
              </div>
              <div className='footerList1 flex'>
                <p >Opening Hours:24 Hours</p>
              </div>
            </div>
          </div>

          <div  className='footerDiv flex'>
            <small >BEST TRAVEL THEME WEBSITE</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
