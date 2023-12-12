import { IoIosArrowRoundForward } from "react-icons/io"

const HeroPage = () =>{
    return(
        <div className="hero">
            <div className="hero--main">
                <div className="hero--details">
                    <h5>Welcome to Academia</h5>
                    <h1>
                        Best Online Education Expertise
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="hero--btn">
                    <button className="getstarted--btn">Get Started Now! <IoIosArrowRoundForward className="arrow"/></button>
                    <button className="course--btn">View Course <IoIosArrowRoundForward/></button>
                </div>
            </div>
        </div>
    )
}

export default HeroPage