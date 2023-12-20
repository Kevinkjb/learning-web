import { FaUserGraduate } from "react-icons/fa";
import { GrUserExpert, GrSchedule } from "react-icons/gr";
import { GiBookmarklet } from "react-icons/gi";
import '../css/review.css'

const ReviewPage = () =>{
    return(
        <>
            <div className="review--section">
                <div className="stories">
                    <FaUserGraduate className="stories--icon"/>
                    <div className="review--details">
                        <h4>3,000</h4>
                        <p>Success Stories</p>
                    </div>
                </div>
                <div className="tutors">
                    <GrUserExpert className="stories--icon"/>
                    <div className="review--details">
                        <h4>320</h4>
                        <p>Trusted Tutors</p>
                    </div>
                </div>
                <div className="schedules">
                    <GrSchedule className="stories--icon"/>
                    <div className="review--details">
                        <h4>1,000</h4>
                        <p>Schedules</p>
                    </div>
                </div>
                <div className="courses">
                    <GiBookmarklet className="stories--icon"/>
                    <div className="review--details">
                        <h4>587</h4>
                        <p>Courses</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewPage