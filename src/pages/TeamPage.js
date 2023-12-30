import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import ReviewPage from "../components/ReviewPage"
import Newsletter from "../components/News"
import FooterPage from "../components/FooterPage"
import Team from "../components/Team"
import teamData from './team-data'
import '../css/team.css'

const TeamPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>1
                <HeroPageTwo title={"Team"} titleTwo={"Team"}/>
            </div>
            <main className="team--page">
            {/* TEAM PAGE SECTION */}
            {
                teamData.map(item => (
                    <Team 
                        key={item.id}
                        teams={item}
                    />
                ))
            }
            </main>

            {/*REVIEW PAGE SECTION */}
            <ReviewPage/>
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

export default TeamPage