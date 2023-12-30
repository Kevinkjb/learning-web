import '../css/faq.css'
import { FaAngleDown } from "react-icons/fa";

const Faq = () =>{
    return(
        <>
            <div className="course-title-home">
                    <h5>Faqs</h5>
                    <h1>Frequesntly Ask Question</h1>
            </div>
            <main className='faq--section'>
                <div className='faq-box-one'>
                    <h3>How to Enroll This Online Courses?</h3>
                    <FaAngleDown/>
                </div>
                <div className='faq-box-two'>
                    <h3>Where It is hidden by default, until the collapse?</h3>
                    <FaAngleDown/>
                </div>
                <div className='faq-box-three'>
                    <h3>How to Enroll This Online Courses?</h3>
                    <FaAngleDown/>
                </div>
            </main>
        </>
    )
}

export default Faq