import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import Contact from "../components/Contact"
import Newsletter from "../components/News"
import FooterPage from "../components/FooterPage"
import '../css/contact.css'

const ContactPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"Contact"} titleTwo={"Contact"}/>
            </div>
            <section>
                <Contact/>
            </section>
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

export default ContactPage