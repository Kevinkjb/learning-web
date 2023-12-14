
import CoursesPage from "../components/CoursesPage"
import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import courses from "./data-info"

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
        </>


    )
}

export default AllCoursesPage