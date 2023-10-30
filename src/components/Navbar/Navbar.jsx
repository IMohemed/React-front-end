import React,{useState} from 'react';
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import Home1 from '../../routes/Home/home' ;
// import Partners from '../../routes/Partners/partners';
// import Products from '../../routes/Products/products';
// import Support from '../../routes/Support/support';
const Navbar = () => {
    const[dropDown,setDropDown] = useState(false)
    const[active ,setActive] = useState('navBar')

    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    const removeNav = () =>{
        setActive('navBar')
    }
  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logodiv'>
                {/* <a href='#' className='logo flex'> */}
                    <h1>Pacific <span>Code</span> </h1>
                {/* </a> */}
            </div>
            <div className={active}>
                <nav>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <Link to='/' className='navLink'>Home</Link>
                    </li>
                    <li  className='navItem'>
                    <Link   className='navLink'>Services</Link>
                    <ul className= 'services-sub' >
                        <li className='submenu'>
                            <Link to='/software'  className='navLink1'>Software</Link>
                        </li>
                        <li className='submenu'>
                            <Link to='/network'  className='navLink1'>Network</Link>
                        </li>
                        <li className='submenu'>
                            <Link to='/survilience'  className='navLink1'>Survilience</Link>
                        </li>
                    </ul>
                    </li>
                    <li className='navItem'>
                    <Link to='/contact' className='navLink'>Contact</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/aboutUs' className='navLink'>About</Link>
                    </li>
                    <button  className='btn flex' type='submit'>
                   Login<FiLogIn className='icon'/>
                    </button>
                    
                </ul>
                </nav>
                <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  );
}

export default Navbar;
