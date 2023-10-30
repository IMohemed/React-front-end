import React from 'react';
import './app.css';
 
import Home1 from './routes/Home/home';
 import Support from './routes/Support/support';
import Partners from './routes/Partners/partners';
import Software from './routes/Support/Software/Software';
import Hotel from './routes/Support/Software/Hotel/hotel';
import Network from './routes/Support/Networking/Network';
import Survilience from './routes/Support/Survilience/survilience';
import Products from './routes/Products/products';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    
     
      <>
        <Routes> 
          <Route path='/' element={<Home1/>} />
          <Route path='/service' element={<Support/>} />
          <Route path='/aboutUs' element={<Partners/>} />
          <Route path='/contact' element={<Products/>} />
          <Route path='/software' element={<Software/>} />
          <Route path='/network' element={<Network/>} />
          <Route path='/survilience' element={<Survilience/>} />
          <Route path='/software/hotel' element={<Hotel/>} />
         </Routes>
        {/* <Home1/> */}
        {/* <Partners/> */}
      {/* <Products/> */}
        {/* <Support/> */}
      {/* <Software/> */}
      {/* <Network/> */}
      </>
    
    
  );
}

export default App;
