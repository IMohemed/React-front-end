import React,{useEffect} from "react";
import img from '../../../Assets/service.jpeg';
import img1 from '../../../Assets/hotel.jpg';
import img2 from '../../../Assets/mobile.jpeg';
import img3 from '../../../Assets/pos.jpeg';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './network.css';

const Data=[
    {
      id:1,
      title:"IT Teams",
      image:img1,
      description:"Put experience first. The most important requirement for networking is simple: great experiences. Juniper delivers the insight, automation, and assurance needed for the best operator and end user experiences from client to cloud.",
    },
    {
      id:2,
      title:"Service Providers",
      image:img2,
      description:"Transform your customer experience. Take an innovative, automated, experience-first approach to your infrastructure, operations, and managed services. Our solutions put your experience as a network operator and the service experience of your customers first, helping your business stay agile, competitive, and secure in a rapidly changing economy.",
    },
    {
      id:3,
      title:"Cloud Operators",
      image:img3,
      description:"Deliver an exceptional experience at cloud scale. Drive innovation while providing the performance and agility your customers expect. Our cloud solutions help you deliver applications and services efficiently and securely at cloud scale.",
    },
    // {
    //   id:4,
    //   title:"Survilience Sollution",
    //   image:img4,
    //   description:"A casino is a facility or establishment where various forms of gambling activities take place.",
    // },
    // {
    //   id:5,
    //   title:"Inventory management",
    //   image:img5,
    //   description:"Creating applications with latest technology and can be portable to any type of devices",
    // },
    // {
    //   id:6,
    //   title:"ERP Management System",
    //   image:img6,
    //   description:"Creating a network of applications",
    // }
]

function Network(){
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="network">
          <div className='overlay'></div>
          <div className="imageContainer">
             <img alt="imge" src={img}/>
             <div className="partText">
                <h1>Network Management</h1>
                <p>We Provide best service for our customers</p>
             </div>
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
          </div>
          <Footer/>
        </>
    )

}

export default Network;