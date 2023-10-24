import React from 'react';
import './app.css';
 
import Home1 from './routes/Home/home';
// import Support from './routes/Support/support';
//import Partners from './routes/Partners/partners';
import Products from './routes/Products/products';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    
     
      <>
        {/* <Routes> */}
          {/* <Route path='/' element={<Home1/>} /> */}
          {/* <Route path='/support' element={<Support/>} /> */}
          {/* <Route path='/partners' element={<Partners/>} />
          <Route path='/product' element={<Products/>} /> */}
        {/* </Routes> */}
        {/* <Home1/> */}
        {/* <Partners/> */}
        <Products/>
        
      </>
    
    
  );
}

export default App;
