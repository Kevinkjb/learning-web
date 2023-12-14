import HeroPage from "../components/HeroPage"
import NavBar from "../components/NavBar"
import BenefitsPage from "../components/BenefitsPage"
import ReviewPage from "../components/ReviewPage"
import CoursesPage from "../components/CoursesPage"
import courses from "./data-info";


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
            

            
        </>
    )
}

export default HomePage