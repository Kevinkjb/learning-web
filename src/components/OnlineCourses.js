const OnlineCourses = ({onlineCourses}) =>{
    return(
        <>
            <div>
                <div className="sample-box">
                    <div className="sample-info">
                        <img className="courses-icon" src={onlineCourses.imgURL} alt="courses img"/>
                        <div className="sample-details">
                            <h2>{onlineCourses.title}</h2>
                            <p>{onlineCourses.totalCourses} Courses</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}
export default OnlineCourses