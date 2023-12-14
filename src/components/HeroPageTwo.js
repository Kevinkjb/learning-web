import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
const HeroPageTwo = (props) =>{
    return(
        <div className="hero">

            <div className="hero--main-two">
                <div className="home-link">
                    <Link to="/" className="prev-home">Home <IoIosArrowForward className="arrow-icon"/></Link>
                    <div className="course-current">
                        <p>{props.titleTwo}</p>
                        <IoIosArrowForward className="arrow-icon"/>
                    </div>
                </div>
                <div className="hero--details-two">
                    <h1 className="all-course-title">
                       {props.title}
                    </h1>
                </div>

            </div>
        </div>
    )
}
export default HeroPageTwo