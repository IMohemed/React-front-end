import React,{useEffect} from 'react';
import './main.css';
import img1 from '../../Assets/casino.jpeg';
import img2 from '../../Assets/network.jpeg';
import img3 from '../../Assets/software.jpeg';
import img4 from '../../Assets/survilience.jpeg';
import img5 from '../../Assets/inventory.jpeg';
import img6 from '../../Assets/ERP.jpeg';
import img7 from '../../Assets/robo.jpg';
import img8 from '../../Assets/sdevelop.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Data=[
  {
    id:1,
    title:"Casino Management",
    image:img1,
    description:"A casino is a facility or establishment where various forms of gambling activities take place.",
  },
  {
    id:2,
    title:"Network Sollution",
    image:img2,
    description:"As a Company we provide you the best sollution for your problems on networking.",
  },
  {
    id:3,
    title:"Software Sollution",
    image:img3,
    description:"As a Company we provide you the best sollution for your problem with our best experienced team",
  },
  {
    id:4,
    title:"Survilience Sollution",
    image:img4,
    description:"A casino is a facility or establishment where various forms of gambling activities take place.",
  },
  {
    id:5,
    title:"Inventory management",
    image:img5,
    description:"Creating applications with latest technology and can be portable to any type of devices",
  },
  {
    id:6,
    title:"ERP Management System",
    image:img6,
    description:"Creating a network of applications",
  }
]
const Main = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
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
            <img src={img7} alt='image'/>
            <img src={img8} alt='image'/>
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
            <img src={img7} alt='image'/>
            <img src={img8} alt='image'/>
          </div>
        </div>
      </div>
      <div data-aos='fade-right' className='secTitle'>
        <h3 className='title'>Services We Provide</h3>
      </div>
      <div className='secContent Grid'>
        {
          Data.map(({id,title,image,description}) => {
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
                <button className='btn flex'>
                  LEARN MORE
                </button>  
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Main;
