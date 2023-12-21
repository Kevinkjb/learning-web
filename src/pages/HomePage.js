import HeroPage from "../components/HeroPage"
import NavBar from "../components/NavBar"
import BenefitsPage from "../components/BenefitsPage"
import ReviewPage from "../components/ReviewPage"
import CoursesPage from "../components/CoursesPage"
import courses from "./data-info";
import coursesData from "./courses-data"
import testimonial from "./testimonial-data"
import pricingData from "./pricing-data"
import blogData from '../pages/blog-data'
import OnlineCourses from "../components/OnlineCourses"
import Testimonial from "../components/Testimonial"
import BlogPage from "../components/BlogPage"
import Pricing from "../components/Pricing"
import News from "../components/News"
import FooterPage from "../components/FooterPage"


const HomePage = () =>{
    return(
        <>
            {/*NAV AND HERO PAGE SECTION */}
            <div className='section--one'>
                <NavBar/>
                <HeroPage/>
            </div>

            {/*BENEFITS PAGE SECTION */}
            <BenefitsPage/>

            {/*REVIEW PAGE SECTION */}
            <ReviewPage/>

            {/*COURSES PAGE SECTION */}

            <section  className="course--page">
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
                
            </section>

            {/* ONLINE COURSES PAGE SECTION */}

            <section className="online--page">
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
            </section>

            {/* TESTIMONIAL PAGE SECTION */}

            <section className="testimonial--page">
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
            </section>

            {/* BLOG PAGE SECTION */}

            <section className="blog--page">
                <div className="course-title-home">
                        <h5>Our Blog</h5>
                        <h1>Recent from blog</h1>
                </div>

                <div className="blog--section">
                    {
                        blogData.filter((item, idx) => idx < 3).map(blogItem => (
                            <BlogPage
                                key={blogItem.id}
                                blog={blogItem}

                            />
                        ))
                    }

                </div>
            </section>

            {/* PRICING PLAN PAGE SECTION */}

            <section className="pricing--page">
                <header className="course-title-home">
                    <h5>Our Pricing</h5>
                    <h1>Pricing & Packages</h1>
                </header>
                <main className="pricing--section">
                    {
                        pricingData.map(price => (
                            <Pricing
                                key={price.id}
                                pricing={price}
                            />
                        ))
                    }
                </main>

            </section>

            {/* NEWSLETTER PAGE SECTION */}

            <section className="newsletter--page">
                    <News />
            </section>

            {/* FOOTER PAGE SECTION */}
            <section className="footer--container">
                <FooterPage/>
            </section>
        </>
    )
}

export default HomePage