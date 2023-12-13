import HeroPage from "../components/HeroPage"
import NavBar from "../components/NavBar"
import BenefitsPage from "../components/BenefitsPage"

const HomePage = () =>{
    return(
        <>
            <div className='section--one'>
                <NavBar/>
                <HeroPage/>
            </div>
            <BenefitsPage/>
        </>
    )
}

export default HomePage