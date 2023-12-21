import { Link } from "react-router-dom"

import {useState} from 'react'

import '../css/courses.css'

const CoursesPage = ({courses}) =>{
    const [rating, setRating] = useState(5)
    const handleStarClick = (index) => {
        setRating(index + 1)
    }
    
    return(
            <div className="course--main">
                <div className="courses--section">
                    <div className="course--icon">img</div>
                    <div className="course--all">
                        <div className="course--details">
                            <h2 className="course--title">{courses.title}</h2>
                            <div className="rating--sect">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                    key={index}
                                    onClick={() => handleStarClick(index)}
                                    style={{
                                        cursor: 'pointer',
                                        color: index < rating ? 'var(--primary-color)' : 'var(--text-light)',
                                        fontSize: '1.4rem',
                                    }}
                                    >
                                    &#9733; 
                                    </span>
                                ))}
                                <p className="rating">({rating})</p>
                            </div>
                            <div className="user--name">
                                <img className="course--prof" src={courses.imgURL} alt="course img"/>
                                <span>by {courses.name}</span>
                            </div>
                            <div className="lect">
                                <p className="courses-hours">50 lectures ({courses.hours})</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="price--section">
                            <p className="courses--price">${courses.priceAllCourse} All Course / ${courses.pricePerMonth} per month</p>
                </div>
                <div className="btn-cont">
                    <Link to="/courses">
                        <button className="enroll--btn">Enroll Now!</button>
                    </Link>
                </div>
            </div>
    )
}
export default CoursesPage