import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"

const TeamPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"Team"}/>
            </div>
        </>
    )
}

export default TeamPage