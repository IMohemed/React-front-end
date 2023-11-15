import React,{useEffect} from "react";
import img from '../../Assets/Contact.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { TextField,FormGroup,FormControl } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Textarea } from "@mui/joy"; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import './products.css';

const useStyle=makeStyles({
  formStyle:{
    width:'50%',
    margin:'auto',
    padding:40,
    marginTop:20,
    paddingTop:40,
    boxShadow:'0px 0px 10px rgba(0,0,0,0.5)',
  },
  field:{
    //paddingTop:20,
    marginbottom:10
  }
});
function Products(){
  React.useEffect(() => {       window.scrollTo({left:0,top: 0,behavior: "smooth"});     }, []);
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
      const classes=useStyle();
    return(
        <>
          <Navbar/>
          <div className="products">
          <div className='overlay'></div>
          <div className="imageContainer">
             <img alt="imge" src={img}/>
             <div className="partText">
                <h1>Contact Us</h1>
                <p>We Provide best service for our customers</p>
             </div>
          </div>
          <div className="fromContainer">
            <h1>Send a Message To Us!</h1>
            <div className="content">
              
              <div className="message">
              <FormGroup id="form" className={classes.formStyle}>
              <FormControl  >
              <TextField margin="normal"  className={classes.field} id="" label="Name" variant="outlined" ></TextField>
                {/* <Input/> */}
              </FormControl>
              <FormControl >  
              <TextField margin="normal" className={classes.field} id="outlined-basic" label="Email" variant="outlined" ></TextField>
                {/* <Input/> */}
              </FormControl>  
              <FormControl className={classes.field}>  
              <TextField margin="normal" id="outlined-basic"  label="Phone" variant="outlined" ></TextField>
                {/* <Input/> */}
              </FormControl> 
              <FormControl className={classes.field}>  
              <Textarea margin="normal" size="lg" sx={{mb:1}} placeholder="Message" />
                {/* <Input/> */}
              </FormControl> 
                <button className="btn">Send Message</button>
                
            </FormGroup>
              </div>
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.388678075739!2d79.91492817466127!3d6.843920993154278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a96cc7b911b%3A0x3cda727b82802e45!2sOnimta%20Information%20Technology%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1699943853042!5m2!1sen!2slk"
               width="300" height="250" 
               allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          </div>
          <Footer/>
        </>
    )
}

export default Products;