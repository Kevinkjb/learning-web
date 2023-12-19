import HeroPage from "../components/HeroPage"
import NavBar from "../components/NavBar"
import BenefitsPage from "../components/BenefitsPage"
import ReviewPage from "../components/ReviewPage"
import CoursesPage from "../components/CoursesPage"
import courses from "./data-info";
import coursesData from "./courses-data"
import testimonial from "./testimonial-data"
import blogData from '../pages/blog-data'
import OnlineCourses from "../components/OnlineCourses"
import Testimonial from "../components/Testimonial"
import BlogPage from "../components/BlogPage"


const HomePage = () =>{
    return(
        <>
            <div className='section--one'>
                <NavBar/>
                <HeroPage/>
            </div>
            <BenefitsPage/>
            <ReviewPage/>
            <div  className="course--page">
                <div className="course-title-home">
                    <h5>Our Courses</h5>
                    <h1>Explore Our Popular Online Courses</h1>
                </div>
                <div className="course--container">

                    {courses.filter((item, idx) => idx < 3).map(item => (
                        <CoursesPage key={item.id}
                            courses={item}
                        />
                    ))}
                </div>
                
            </div>
            <div className="online--page">
                <div className="course-title-home">
                    <h5>Our Courses</h5>
                    <h1>Browse Our Online Courses</h1>
                </div>
                <div className="online--courses">
                
                {coursesData.map(data => (
                    <OnlineCourses
                        key={data.id}
                        onlineCourses={data}
                    />
                ))}
                </div>
            </div>
            <div className="testimonial--page">
                <div className="course-title-home">
                    <h5>Testimonial</h5>
                    <h1>Our Successful Students</h1>
                </div>
                <div className="testimonial--section">
                    {
                    testimonial.map(testimonialData => (
                        <Testimonial
                            key={testimonialData.id}
                            testimonial={testimonialData}
                        />
                    ))
                    }
                </div>
            </div>
            <div className="blog--page">
                <div className="course-title-home">
                        <h5>Our Blog</h5>
                        <h1>Recent from blog</h1>
                </div>

                <div className="blog--section">
                    {
                        blogData.map(blogItem => (
                            <BlogPage
                                key={blogItem.id}
                                blog={blogItem}

                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default HomePage