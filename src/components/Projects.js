import React from 'react';
import './Projects.css';
import cocktaildb from '../assets/img/cocktaildb.png';
import grocerylist from '../assets/img/grocerylist.png';

function Projects() {
    return (
        <div id="projects" data-aos="fade-in">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-11 offset-sm-1">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <h2>Projects</h2>
                                <br />
                            </div>
                            <div className="col-sm-6 mb-4">
                                <div className="imgsec" data-aos="zoom-in">
                                    <img src={cocktaildb} className="img-fluid" alt="cocktaildb" />
                                </div>
                                <a href="https://personal-project-cocktailsdb.netlify.app/" target="_blank" rel="noreferrer">
                                    <button type='button' className='btn m-2'>Website</button>
                                </a>
                                <a href="https://github.com/PaulMartinezAngel/cocktails" target="_blank" rel="noreferrer">
                                    <button type='button' className='btn m-2'>Github</button>
                                </a>
                            </div>
                            <div className="col-sm-6 mb-4">
                                <div className="imgsec" data-aos="zoom-in">
                                    <img src={grocerylist} className="img-fluid" alt="grocerylist" />
                                </div>
                                <a href="https://personal-project-grocerylist.netlify.app/" target="_blank" rel="noreferrer">
                                    <button type='button' className='btn m-2'>Website</button>
                                </a>
                                <a href="https://github.com/PaulMartinezAngel/grocery-list" target="_blank" rel="noreferrer">
                                    <button type='button' className='btn m-2'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;