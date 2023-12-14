import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"

const JournalPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"Journal"} titleTwo={"Blog"}/>
            </div>
        </>
    )
}

export default JournalPage