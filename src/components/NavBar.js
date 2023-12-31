import { useState, useEffect } from "react";
import { IoMdTime } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble  } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import '../css/nav.css'
const NavBar = () =>{
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);
  
    useEffect(() => {
      // Extract the last part of the pathname as the activeItem
      const lastPath = location.pathname.split('/').pop();
      setActiveItem(lastPath || 'item1'); // Default to 'item1' if no path
    }, [location.pathname]);

    return(
        <div className="navbar">
            <div className="top--header">
                <div className="logo">
                    <h2>
                        Academia
                    </h2>
                    <p>Online Education & Learning</p>
                </div>
                {/* Contact Info */}
                <div className="contact-info">
                    {/* Icon */}
                    <div className="contact-details">
                        <div className="time">
                            <IoMdTime className="time--icon"/>
                            <div>
                                <p>Monday - Friday</p>
                                <p className="bold--text">8:00AM - 8:00PM</p>
                            </div>

                        </div>
                        <div className="phone">
                            <BiPhoneCall className="phone--icon"/>
                            <div>
                                <p>Call Us</p>
                                <p className="bold--text">+2 392 3929 210</p>
                            </div>

                        </div>
                    </div>
                    {/* Social Medias Icons */}
                    <div className="media--icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <a href="https://www.dribbble.com" target="_blank" rel="noreferrer"><FaDribbble /></a>
                    </div>

                </div>

            </div>
            <nav className="main-nav">
                <div>
                    <div className="burger">
                        <TiThMenu className="burger--menu"/>
                        <span className="burger--text">Menu</span>
                    </div>
                    <ul className="nav-list ">
                        <li>
                        <Link 
                            className={activeItem === 'item1' ? 'active' : 'nav-link'}

                            to="/">Home
                        </Link>
                        </li>
                        <li>
                            <Link 
                                className={activeItem === 'courses' ? 'active' : 'nav-link'}
                                to="/courses">All Courses
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={activeItem === 'about' ? 'active' : 'nav-link'}
                                to="/about">About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={activeItem === 'team' ? 'active' : 'nav-link'}
                                to="/team">Team
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={activeItem === 'pricing' ? 'active' : 'nav-link'}
                                to="/pricing">Pricing
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={activeItem === 'journal' ? 'active' : 'nav-link'}
                                to="/journal">Journal
                            </Link>
                        </li>
                        <li>
                        <Link 
                                className={activeItem === 'contact' ? 'active' : 'nav-link'}
                                to="/contact">Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="nav-btn">Get Certificate</button>
            </nav>
        </div>
    )
}

export default NavBar