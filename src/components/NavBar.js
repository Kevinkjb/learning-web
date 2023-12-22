
import { IoMdTime } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble  } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import '../css/nav.css'
const NavBar = () =>{
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
                        <span><FaFacebookF/></span>
                        <span><FaTwitter/></span>
                        <span><FaInstagram/></span>
                        <span><FaDribbble /></span>
                    </div>

                </div>

            </div>
            <nav className="main-nav">
                <div>
                    <div className="burger">
                        <TiThMenu className="burger--menu"/>
                        <span className="burger--text">Menu</span>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/courses">All Courses</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/team">Team</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/journal">Journal</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <button className="nav-btn">Get Certificate</button>
            </nav>
        </div>
    )
}

export default NavBar