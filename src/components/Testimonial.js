const Testimonial = ({testimonial}) =>{
    return(
        <>
            <div className="testimonial--box">
                    <div className="student--prof">
                        <img className="testimonial--img" src={testimonial.imgURL} alt="testimonial img"/>
                        <div className="student--info">
                            <h3 className="testimonial--title">{testimonial.name}</h3>
                            <p className="job--title">{testimonial.jobTitle}</p>
                        </div>
                    </div>
                    <div className="testimonial--text">
                        <p>{testimonial.description}</p>
                    </div>
            </div>
        </>
    )
}

export default Testimonial