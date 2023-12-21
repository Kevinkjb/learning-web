
import CoursesPage from "../components/CoursesPage"
import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import courses from "./data-info"
import OnlineCourses from "../components/OnlineCourses"
import coursesData from "./courses-data"
import Newsletter from "../components/News"
import FooterPage from "../components/FooterPage"

const AllCoursesPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo  title={"Explore Courses"} titleTwo={"Course"}/>
            </div>
            <div  className="course-all-page">
                <div className="course-all">

                    {courses.map(item => (
                        <CoursesPage key={item.id}
                            courses={item}
                        />
                    ))}
                </div>
            </div>
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
             {/* NEWSLETTER PAGE SECTION */}

             <section className="newsletter--page">
                <Newsletter />
            </section>

            {/* FOOTER PAGE SECTION */}
            <section className="footer--container">
                <FooterPage/>
            </section>
        </>


    )
}

export default AllCoursesPage