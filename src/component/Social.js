import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF  , FaLinkedin , FaTwitter , FaGithub , FaInstagram} from "react-icons/fa";

export default function Social(){
    return(
        <section className="social-section">
            <p>Let’s Talk More?</p>
            <ul className="social-listing">
                <li>
                    <Link to="/">
                    <FaFacebookF/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FaLinkedin/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FaTwitter/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FaGithub/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FaInstagram/>
                    </Link>
                </li>
                
            </ul>
        </section>
    );
}