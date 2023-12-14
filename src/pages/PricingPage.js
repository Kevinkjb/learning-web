import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"

const PricingPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"Pricing"} titleTwo={"Pricing"}/>
            </div>
        </>
    )
}

export default PricingPage