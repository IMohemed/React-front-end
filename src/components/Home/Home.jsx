import React, {useEffect,useRef} from 'react';
import './home.css';
import tech from '../../Assets/tech1.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";
//import Typed from 'typed.js';
const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['Casino','Management', 'System'],
  //     startDelay:300,
  //     typeSpeed: 150,
  //     backDelay:150,
  //     backSpeed:150,
  //     smartBackspace:true,
  //     showCursor:false,
  //     loop:true,
  //   });
  // }, []);
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={tech} muted  autoPlay loop typeof="video/mp4"></video>
      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos='fade-up' className='smallText'>
            We Provide you the best services on
          </span>
          <h1 ref={el} className='homeTitle'>
            <Typewriter options={{autoStart:true,loop:true,delay:35,
              strings:['Casino Management System','Network Sollutions','Software Sollutions','Survillience Sollutions','Inventory Management','ERP Management System']}}/>
          </h1>
            
          
        </div>
      </div>
    </section>
  );
}

export default Home;
