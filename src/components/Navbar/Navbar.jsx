import React,{useState} from 'react';
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Home1 from '../../routes/Home/home' ;
// import Partners from '../../routes/Partners/partners';
// import Products from '../../routes/Products/products';
// import Support from '../../routes/Support/support';
const Navbar = () => {
    const[dropDown,setDropDown] = useState(false)
    const[active ,setActive] = useState('navBar');
    const nav = useNavigate();

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
                    <h1 >Pacific<span>Code</span></h1>
                {/* </a> */}
            </div>
            <div className={active}>
                <nav>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <Link to='/' className='navLink'>Home</Link>
                    </li>
                    <li  className='navItem'>
                    <Link  to='/service' className='navLink'>Services</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/contact' className='navLink'>Contact</Link>
                    </li>
                    <li className='navItem'>
                    <Link to='/aboutUs' className='navLink'>About</Link>
                    </li>
                    {/* <button onClick={() => nav("/login")}  className='btn flex' type='submit'> */}
                   {/* Login */}
                   {/* <FiLogIn className='icon'/> */}
                    {/* </button> */}
                    
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
