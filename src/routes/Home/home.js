import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import Home from '../../components/Home/Home';
import Footer from '../../components/Footer/Footer';


function Home1(){
    return(
        <>
          <Navbar/>
          <Home/>
          <Main/>
          <Footer/>
        </>
    )
}

export default Home1;