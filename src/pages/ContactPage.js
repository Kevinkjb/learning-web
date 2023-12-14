import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"

const ContactPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"Contact"} titleTwo={"Contact"}/>
            </div>
        </>
    )
}

export default ContactPage