import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"

const AboutPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"About"}/>
            </div>
        </>
    )
}

export default AboutPage