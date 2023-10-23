import React,{useState} from 'react';
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import { FiLogIn } from 'react-icons/fi';

const Navbar = () => {
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
                <a href='#' className='logo flex'>
                    <h1>PacificCode</h1>
                </a>
            </div>
            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Products</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Support</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Partners</a>
                    </li>
                    <button data-aos='fade-up' className='btn flex' type='submit'>
                   Login<FiLogIn className='icon'/>
                    </button>
                    
                </ul>
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
