import React from "react";
import { Link } from "react-router-dom";
import project from '../assets/img/project.png';
import {BsArrowRight } from "react-icons/bs";

export default function SingleProject(){
    return(
        <div className="work-projects">
            <div className="single-project d-flex align-items-center">
                <div className="project-content">
                    <h3>Project Title</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <Link to="/">
                        View Project <span><BsArrowRight/></span>
                    </Link>
                </div>
                <div className="img">
                    <img src={project} alt="project"/>
                </div>
            </div>
            <div className="single-project d-flex align-items-center">
                <div className="project-content">
                    <h3>Project Title</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <Link to="/">
                        View Project <span><BsArrowRight/></span>
                    </Link>
                </div>
                <div className="img">
                    <img src={project} alt="project"/>
                </div>
            </div>
            <div className="single-project d-flex align-items-center">
                <div className="project-content">
                    <h3>Project Title</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <Link to="/">
                        View Project <span><BsArrowRight/></span>
                    </Link>
                </div>
                <div className="img">
                    <img src={project} alt="project"/>
                </div>
            </div>
            <div className="single-project d-flex align-items-center">
                <div className="project-content">
                    <h3>Project Title</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <Link to="/">
                        View Project <span><BsArrowRight/></span>
                    </Link>
                </div>
                <div className="img">
                    <img src={project} alt="project"/>
                </div>
            </div>
            <div className="single-project d-flex align-items-center">
                <div className="project-content">
                    <h3>Project Title</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <Link to="/">
                        View Project <span><BsArrowRight/></span>
                    </Link>
                </div>
                <div className="img">
                    <img src={project} alt="project"/>
                </div>
            </div>
        </div>
        
    );
}