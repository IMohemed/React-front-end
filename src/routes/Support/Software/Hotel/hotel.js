import React,{useEffect} from "react";
import img from '../../../../Assets/hotel.jpeg';
import img1 from '../../../../Assets/int.jpeg';
import img2 from '../../../../Assets/mob.jpeg';
import img3 from '../../../../Assets/grid.png';
import img4 from '../../../../Assets/guest.jpeg';
import img5 from '../../../../Assets/email.jpeg';
import img6 from '../../../../Assets/house.jpeg';
import img7 from '../../../../Assets/res.jpeg';
import img8 from '../../../../Assets/room.jpeg';
import img9 from '../../../../Assets/group.png';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
//import { Box } from "@mui/material";

//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './hotel.css';

const Data=[
  {
    id:1,
    title:"Intuitive & easy-to-use interface",
    image:img1,
    description:"A casino is a facility or establishment where various forms of gambling activities take place.",
    cv:'/casino'
  },
  {
    id:2,
    title:"Mobile & tablet optimised",
    image:img2,
    description:"As a Company we provide you the best sollution for your problems on networking.",
    cv:'/network'
  },
  {
    id:3,
    title:"Clear visibility of the grid",
    image:img3,
    description:"As a Company we provide you the best sollution for your problem with our best experienced team",
    cv:'/software'
  },
  {
    id:4,
    title:"Guest profiles",
    image:img4,
    description:"A casino is a facility or establishment where various forms of gambling activities take place.",
    cv:'/survilience'
  },
  {
    id:5,
    title:"Email automation",
    image:img5,
    description:"Creating applications with latest technology and can be portable to any type of devices",
    cv:'/inventory'
  },
  {
    id:6,
    title:"Housekeeping management:",
    image:img6,
    description:"Creating a network of applications",
    cv:'/erp'
  },
  {
    id:7,
    title:"Reservation management",
    image:img7,
    description:"Creating a network of applications",
    cv:'/erp'
  },
  {
    id:8,
    title:"Room management",
    image:img8,
    description:"Creating a network of applications",
    cv:'/erp'
  },
  {
    id:9,
    title:"Group bookings/reservations",
    image:img9,
    description:"Creating a network of applications",
    cv:'/erp'
  }
]

function Hotel(){
  React.useEffect(() => {       window.scrollTo({left:0,top: 0,behavior: "smooth"});     }, []);
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return(
        <>
          <Navbar/>
          <div className="hotel container section">
            <div className="contain">
              <h1>Hotel Management</h1>
              <div data-aos='fade-up' className="image">
                <img src={img} alt=""/>
              </div>
              <div className="text">
                <p data-aos='fade-up'>
                Hotel management refers to the efficient operation and administration of a hotel or a similar establishment to ensure
                 a seamless and satisfying experience for guests. It encompasses a wide range of tasks, including guest services,
                 staff management, facility maintenance, and financial management. Here's a detailed description of hotel management
                 <br/><br/>
                 2015 has undoubtedl been a busy year in providing the best software Sollution for the hotel industry.For managing Hotels 
                 and Restuarents we have introduced a customized software system for the convinience of our valuable customers.
                 <br/><br/>
                 Within a single year of processing this product, wehave been able to score an impressive 25 important clients and among them are Ransara, In and Out, Hangout,
                 WhiteHouse,Milano ,Little Hut, and Hands Dreams.
                 <br/><br/>
                 The software is specialized for these of Hotels and restuarents, and we ,the dedicated team at OnimtaIT, are willing to customize the
                 product for you ,according to your wishes of how your working environment should be.Our expertise will provide you 
                 with exceptional service and satisfaction at the end of the day.
                 <br/><br/>
                </p>
              </div>
            </div>
            <div className="mainCon">
            <div data-aos='fade-right' className='secTitle'>
               <h3 className='title'>Features</h3>
             </div>
            <Grid className="grid" container rowSpacing="40px" columnSpacing="40px" >
            {
          Data.map(({id,title,image,description}) => {
            return(
              // <Grid container spacing={2}>
              
                <Grid  key={id} item md={3} sm={6} xs={12} lg={4}>
            <Card className="card" sx={{width:50+"vh",height:34+"vh",justifyContent:"center",bgcolor:"rgb(225,225,235)",boxShadow:"0 2px 4px rgba(133, 133, 135, 0.549)",borderRadius:15+"px      "}} data-aos='fade-up' >
            <CardMedia className="cardM" sx={{height:23+"vh"}}
              component="img"
              alt="green iguana"
              image={image}
            />
            <CardContent className="cardCon" sx={{textAlign:"center"}}>
              <Typography sx={{fontSize:18+"px"}} gutterBottom variant="h5" component="div">
                    {title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {description}
              </Typography> */}
            </CardContent>
            {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card></Grid>
   
    )}) 
          }</Grid>
            </div>
          </div>
          <Footer/>
        </>
    )

}

export default Hotel;