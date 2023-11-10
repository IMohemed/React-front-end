import React,{useEffect,useState} from 'react';
import './main.css';
import img1 from '../../Assets/casino.jpeg';
import img2 from '../../Assets/network.jpeg';
import img3 from '../../Assets/software.jpeg';
import img4 from '../../Assets/survilience.jpeg';
import img5 from '../../Assets/inventory.jpeg';
import img6 from '../../Assets/ERP.jpeg';
import img7 from '../../Assets/robo.jpg';
import img8 from '../../Assets/sdevelop.jpeg';
import img9 from '../../Assets/steve.jpeg';
import img10 from '../../Assets/jack.jpeg';
import img11 from '../../Assets/obama.jpeg';
import img12 from '../../Assets/sdevelop.jpeg';
import Software from '../../routes/Support/Software/Software';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Slide, sliderClasses } from '@mui/material';
import { FiAlignLeft, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
const Data=[
  {
    id:1,
    title:"Casino Management",
    image:img1,
    description:"A casino is a facility or establishment where various forms of gambling activities take place.",
    cv:'/casino'
  },
  {
    id:2,
    title:"Network Sollution",
    image:img2,
    description:"As a Company we provide you the best sollution for your problems on networking.",
    cv:'/network'
  },
  {
    id:3,
    title:"Software Sollution",
    image:img3,
    description:"As a Company we provide you the best sollution for your problem with our best experienced team",
    cv:'/software'
  },
  {
    id:4,
    title:"Survilience Sollution",
    image:img4,
    description:"A casino is a facility or establishment where various forms of gambling activities take place.",
    cv:'/survilience'
  },
  {
    id:5,
    title:"Inventory management",
    image:img5,
    description:"Creating applications with latest technology and can be portable to any type of devices",
    cv:'/inventory'
  },
  {
    id:6,
    title:"ERP Management System",
    image:img6,
    description:"Creating a network of applications",
    cv:'/erp'
  }
]
// const move=() => {
  
// }
const Main = () => {
  const [activeButton, setActivebutton] = useState(0);
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  const navigate = useNavigate();
  const st = document.getElementById('slide');
  // const carousel = document.querySelector(".slide-row");
  // const Arowbtn = document.querySelectorAll(".arrow");
  // const firstcardwidth = carousel.querySelector(".slide-col").offsetWidth ;
    //const btn = document.getElementsByClassName('btn');
    //let i;
    const handleClick = (buttonIndex) => {
      if(buttonIndex===0)
      st.style.transform = 'translateX(0px)';
      if(buttonIndex===1)
      st.style.transform = 'translateX(-800px)';
      if(buttonIndex===2)
      st.style.transform = 'translateX(-1600px)';
      if(buttonIndex===3)
      st.style.transform = ' translateX(-2400px)';
      // for(i=0;i<4;i++){
      //   btn[i].classList.remove('active');
      // }
      // btn[0].classList.add('active');
      setActivebutton(buttonIndex);
      
    };
    const handlearrow = () => {
    //   Arowbtn.forEach(btn => {
    //     carousel.scrollLeft += btn.id ==='left'? -firstcardwidth:firstcardwidth;
    // })
  };
  
  // const handleClick2 = () => {
  //   st.style.transform = `translateX(-1600px)`;
  //   for(i=0;i<4;i++){
  //     btn[i].classList.remove('active');
  //   }
  //   btn[2].classList.add('active');
  // };
  // const handleClick3 = () => {
  //   st.style.transform = `translateX(-2400px)`;
  //   for(i=0;i<4;i++){
  //     btn[i].classList.remove('active');
  //   }
  //   btn[3].classList.add("active");
  // };
  return (
    <section className='main container section'>
      <div data-aos='fade-up' className='destination'>
        <h1>Great Service</h1>
        <p>a software company is a dynamic and innovative entity at the heart of the tech industry. It creates software solutions that drive businesses, enhance productivity, entertain users, and contribute to the advancement of technology</p>
        
        <div data-aos='fade-up' className='first-des'>
          <div className='des-text'>
            <h2>Software Development</h2>
            <p>A software company, also known as a software development company or 
              software vendor, is an organization or business that specializes in 
              designing, developing, testing, and maintaining software applications, 
              programs, and solutions. Here's a description of a software company
              Here's a description of a software company.Software is a set of instructions,
                data or programs used to operate computers and execute specific tasks. 
                It is the opposite of hardware, which describes the physical aspects of a 
                computer. Software is a generic term used to refer to applications, scripts 
                and programs that run on a device. It can be thought
                of as the variable part of a computer, while hardware is the invariable part.
            </p>
          </div>
          <div className='image'>
            <img src={img7} alt='imge'/>
            <img src={img8} alt='imge'/>
          </div>
        </div>
        <div data-aos='fade-up' className='first-des-reverse'>
          <div className='des-text'>
            <h2>Software Development</h2>
            <p>A software company, also known as a software development 
              company or software vendor, is an organization or business that 
              specializes in designing, developing, testing, and maintaining 
              software applications, programs, and solutions.
               Here's a description of a software company.Software is a set of instructions,
                data or programs used to operate computers and execute specific tasks. 
                It is the opposite of hardware, which describes the physical aspects of a 
                computer. Software is a generic term used to refer to applications, scripts 
                and programs that run on a device. It can be thought
                of as the variable part of a computer, while hardware is the invariable part.
            </p>
          </div>
          <div className='image'>
            <img src={img7} alt='imge'/>
            <img src={img8} alt='imge'/>
          </div>
        </div>
      </div>
      <div data-aos='fade-right' className='secTitle'>
        <h3 className='title'>Services We Provide</h3>
      </div>
      <div className='secContent Grid'>
        {
          Data.map(({id,title,image,description,cv}) => {
            return(
              
              <div data-aos='fade-up' key={id} className="singleDestination">
                <div className='imageDiv'>
                  <img src={image} alt={title}/>
                </div>
                <div className='cardInfo'>
                  <h4 className='title'>{title}</h4>
                </div>
                <div className='desc'>
                  <p>{description}</p>
                </div>
                <button onClick={() => navigate(cv)}  className='btn flex'>
                  LEARN MORE
                </button>  
              </div>
            )
          })
        }
      </div>
      <div data-aos='fade-up'  className='hero'>
        <h1> Reviews</h1>
        <div className='contain'>
        <FiArrowLeftCircle onClick={() => handlearrow()} id='left' className='arrow'/>
          <div className='indicator'>
          
             <span onClick={() => handleClick(0) } className={`btn ${activeButton===0?'active':''}`}></span> 
             <span onClick={() => handleClick(1) } className={`btn ${activeButton===1?'active':''}`}></span> 
             <span onClick={() => handleClick(2) } className={`btn ${activeButton===2?'active':''}`}></span> 
             <span onClick={() => handleClick(3) } className={`btn ${activeButton===3?'active':''}`}></span> 
          </div>
          <div  className='testimonial'>
            
          <div className='slide-row' id='slide'>
          <div className='slide-col' >
            <div className='user-text'>
              <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, inventor, and investor best known as the co-founder of Apple. Jobs was also chairman and majority shareholder of Pixar, and the founder of NeXT.</p>
              <h3>Steve Jobs</h3>
              <p>Steve Inc.</p>
            </div>
            <div className='user-img'>
              <img src={img9} alt=''/>
            </div>
          </div>
          <div className='slide-col' >
            <div className='user-text'>
              <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, inventor, and investor best known as the co-founder of Apple. Jobs was also chairman and majority shareholder of Pixar, and the founder of NeXT.</p>
              <h3>Steve Jobs</h3>
              <p>Steve Inc.</p>
            </div>
            <div className='user-img'>
              <img src={img10} alt=''/>
            </div>
          </div>
          <div className='slide-col' >
            <div className='user-text'>
              <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, inventor, and investor best known as the co-founder of Apple. Jobs was also chairman and majority shareholder of Pixar, and the founder of NeXT.</p>
              <h3>Steve Jobs</h3>
              <p>Steve Inc.</p>
            </div>
            <div className='user-img'>
              <img src={img11} alt='' />
            </div>
          </div>
          <div className='slide-col' >
            <div className='user-text'>
              <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, inventor, and investor best known as the co-founder of Apple. Jobs was also chairman and majority shareholder of Pixar, and the founder of NeXT.</p>
              <h3>Steve Jobs</h3>
              <p>Steve Inc.</p>
            </div>
            <div className='user-img'>
              <img src={img12} alt=''/>
            </div>
          </div>
        </div>
        
          </div>
          <FiArrowRightCircle onClick={() => handlearrow()} id='right' className='arrow'/>
        </div>
      </div>
    </section>
  );
}

export default Main;
