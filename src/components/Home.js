import React from 'react';
import './Home.css';
import profileimg from '../assets/img/professional.png';
import linkedinicon from '../assets/img/socialicons/linkedin.png';
import githubicon from '../assets/img/socialicons/github.png';
import mailicon from '../assets/img/socialicons/email.png';
import pdf from '../assets/pdf/paulmartinezangel.pdf';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id='home' className='d-flex justify-content-center align-items-center mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='imgsec'>
                            {/* Professional Picture */}
                            <div>
                                <img src={profileimg} className='img-fluid' data-aos='flip-right' alt='Paul Martinez Angel' />
                            </div>
                            {/* Social Media Icons */}
                            <div className="socialmedia">
                                <a href="https://www.linkedin.com/in/paulmartinezangel/" target="_blank" rel="noreferrer">
                                    <img width="40px" className='m-3' src={linkedinicon} alt="linkedin" data-aos="fade-right" data-aos-delay="400" />
                                </a>
                                <a href="https://github.com/paulmartinezangel" target="_blank" rel="noreferrer">
                                    <img width="40px" className='m-3' src={githubicon} alt="github" data-aos="fade-right" data-aos-delay="400" />
                                </a>
                                <a href="mailto:paulmartinezdev@gmail.com" target="_blank" rel="noreferrer">
                                    <img width="40px" className='m-3' src={mailicon} alt="email" data-aos="fade-right" data-aos-delay="400" />
                                </a>
                            </div>
                            {/* Black side bar */}
                            <div className="bgblack" data-aos="fade-right" />
                        </div>
                        {/* Name Plaque */}
                        <div className="row justify-content-center" data-aos='fade-right' data-aos-delay="800">
                            <div className='col-12'>
                                <h1>Paul Martinez Angel</h1>
                                <h2>Full Stack Web Developer</h2>
                                <br />
                            </div>
                        </div>
                        {/* buttons */}
                        <div className="row justify-content-center" data-aos='fade-right' data-aos-delay="1400">
                            <div className="d-flex justify-content-center align-item-center col-6">
                                <a href={pdf} target="_blank" rel="noreferrer">
                                    <button type="button" className="btn mx-2">
                                        Resume
                                    </button>
                                </a>
                                <Link to="/contact">
                                    <button type="button" className="btn mx-2 text-nowrap">
                                        Hire Me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;