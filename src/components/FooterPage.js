import { FaFacebookF, FaInstagram, FaTwitter, FaUser, FaRegCalendarAlt, FaMap, FaPaperPlane, FaPhoneAlt, FaHeart    } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io"
import blogData from '../pages/blog-data'
import '../css/footer.css'
const FooterPage = () =>{
    const fb = 'https://www.facebook.com';
    const twitter = 'https://www.twitter.com';
    const insta = 'https://www.instagram.com';


    return(
        <>
            <footer className="footer--page">
                {/* FOOTER BOX ONE */}
                <section className="footer--info">
                    <div className="footer--title">
                        <h2>Academia</h2>
                        <span>Online Education & Learning</span>
                    </div>
                    <p className="footer-desc">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="footer--icon">
                        <div className="footer--icons">
                            <a href={twitter} target="_blank" rel="noreferrer">
                                <FaTwitter/>
                            </a>
                        </div>
                        <div className="footer--icons">
                            <a href={fb} target="_blank" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                        </div>
                        <div className="footer--icons">
                            <a href={insta} target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </section>
                {/* FOOTER BOX TWO */}
                <section className="footer-links">
                    <div className="footer--explore">
                        <h3>Explore</h3>
                        <ul className="footer--item">
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <Link to="/pricing">Services</Link>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <Link to="/courses">Courses</Link>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <Link to="/journal">Blog</Link>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li> 
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="footer--quicklinks">
                        <h3>Quick Links</h3>
                        <ul className="footer--item">
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <Link to="/pricing" >Pricing</Link>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <a href="/"  rel="noreferrer" >Terms & Conditions</a>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <a href="/"  rel="noreferrer" >Privacy</a>
                                </li>
                            </div>
                            <div className="item--list"> 
                                <IoIosArrowRoundForward className="arrow--forward"/>
                                <li>
                                    <a href="/" rel="noreferrer" >Feedbacks</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </section>
                {/* FOOTER BOX THREE */}
                <section className="footer--recent-post">
                    <div className="footer--post">
                        <h3>Recent Posts</h3>
                        <div className="blog--post">
                            <img className="footer--img" src={blogData[0].imgURL} alt="blog img"/>
                            <div className="posts--info">
                                <div>
                                    <Link to="/journal" className="posts--details">
                                        <p><FaRegCalendarAlt/> {blogData[0].date}</p>
                                        <p><FaUser/> {blogData[0].user}</p>
                                    </Link>
                                </div>
                                <Link to="/journal" className="posts--desc">Creativity and Inspiration</Link>
                            </div>
                        </div>
                        <div className="blog--post">
                            <img className="footer--img" src={blogData[0].imgURL} alt="blog img"/>
                            <div className="posts--info">
                                <div>
                                    <Link to="/journal" className="posts--details">
                                        <p><FaRegCalendarAlt/> {blogData[0].date}</p>
                                        <p><FaUser/> {blogData[0].user}</p>
                                    </Link>
                                </div>
                                <Link to="/journal" className="posts--desc">Creativity and Inspiration</Link>
                            </div>
                        </div>
                        <div className="blog--post">
                            <img className="footer--img" src={blogData[0].imgURL} alt="blog img"/>
                            <div className="posts--info">
                                <div>
                                    <Link to="/journal" className="posts--details">
                                        <p><FaRegCalendarAlt/> {blogData[0].date}</p>
                                        <p><FaUser/> {blogData[0].user}</p>
                                    </Link>
                                </div>
                                <Link to="/journal" className="posts--desc">Creativity and Inspiration</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER BOX FOUR */}
                <section className="questions--section">
                    <div className="questions">
                        <h3>Have a Questions?</h3>
                        <div className="footer--address">
                            <FaMap className="contact--icon"/>
                            <p>203 Fake St. Mountain View, San<br/>
                             Francisco, California, USA</p>
                        </div>
                        <div className="footer--phone">
                            <FaPhoneAlt className="contact--icon"/>
                            <p>+2 392 3929 210</p>
                        </div>
                        <div className="footer--email">
                            <FaPaperPlane className="contact--icon"/>
                            <p>info@yourdomain.com</p>
                        </div>
                    </div>
                </section>
                
            </footer>
            <div className="copyrights">
                <small>
                    Copyright ©2023 All rights reserved | Made with 
                    <FaHeart className="heart"/> by  
                     <a className="portfolio--link" href="https://www.kevinjb.dev" target="_blank" rel="noreferrer">
                        Kevin Baguioso
                    </a>
                </small>
            </div>
            
        </>
    )
}
export default FooterPage