import {Link} from 'react-router-dom'
import { FaUser, FaRegCalendarAlt, FaComment } from "react-icons/fa";
import '../css/blog.css'

const BlogPage = ({blog}) =>{
    return(
        <>
        <div className='blog--container'>
            <div>
                <Link to="/journal">
                    <img className='blog--img' src={blog.imgURL} alt="blog img"/>
                </Link>
            </div>
            <div className='blog--details'>
                <div className="blog-item-section">
                    <div className='blog-item'>
                        <FaUser className='blog--icon'/>
                        <span className='blog--admin'>{blog.user}</span>
                    </div>
                    <div className='blog-item'>
                        <FaRegCalendarAlt className='blog--icon'/>
                        <span className='blog--date'>{blog.date}</span>
                    </div>
                    <div className='blog-item'>
                        <FaComment className='blog--icon'/>
                        <Link to="/journal" className='blog--comments'>
                            <span>{blog.comments}</span>
                        </Link>
                    </div>
                </div>
                <div className='blog--desc'>
                    <Link to="/journal" className='blog--title'>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>
                        {blog.description}
                    </p>
                </div>
            </div>
            
        </div>

        </>
    )
}

export default BlogPage