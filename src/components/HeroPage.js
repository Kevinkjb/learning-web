import { IoIosArrowRoundForward } from "react-icons/io"
import {Link} from 'react-router-dom'

const HeroPage = () =>{
    return(
        <div className="hero">
            <div className="hero--main">
                <div className="hero--details">
                    <h2>Welcome to Academia</h2>
                    <h1>
                        Best Online Education Expertise
                    </h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="hero--btn">
                    <Link className="getstarted--btn">
                        Get Started Now! 
                        <IoIosArrowRoundForward className="arrow"/>
                    </Link>
                    <Link className="course--btn">
                        View Course 
                        <IoIosArrowRoundForward className="arrow"/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroPage