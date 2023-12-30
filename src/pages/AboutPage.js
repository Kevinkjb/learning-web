import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import Newsletter from "../components/News"
import FooterPage from "../components/FooterPage"
import BenefitsPage from "../components/BenefitsPage"
import ReviewPage from "../components/ReviewPage"
import Testimonial from "../components/Testimonial"
import testimonial from "./testimonial-data"

const AboutPage = () =>{
    return(
        <>
            <header className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"About"} titleTwo={"About"}/>
            </header>
            <main>
                <div className="section--benefits">
            {/*BENEFITS PAGE SECTION */}
                <BenefitsPage/>
                </div>
            {/*REVIEW PAGE SECTION */}
                <ReviewPage/>
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
            </main>
            {/* NEWSLETTER PAGE SECTION */}
             <section className="newsletter--page">
                <Newsletter />
            </section>
            <footer>
            {/* FOOTER PAGE SECTION */}
                <section className="footer--container">
                    <FooterPage/>
                </section>
            </footer>
        </>
    )
}

export default AboutPage