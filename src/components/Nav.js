import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Home from '../assets/img/home.png'
import Projects from '../assets/img/projects.png'
import Contact from '../assets/img/contact.png'


const Nav = () => {
    return (
        <nav>
            <ul id="navigation" className='nav-links'>
                <Link to='/'>
                    <li>
                        <img src={Home} alt="home" />
                    </li>
                </Link>
                <Link to='/projects'>
                    <li>
                        <img src={Projects} alt="projects" />
                    </li>
                </Link>
                <Link to='/contact'>
                    <li>
                        <img src={Contact} alt="contact" />
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;