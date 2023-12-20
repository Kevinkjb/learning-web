import { GiBookmarklet } from "react-icons/gi";
import { PiCertificateLight } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";
import '../css/benefits.css'
const benefitsImg = "https://preview.colorlib.com/theme/academia/images/about.jpg"

const BenefitsPage = () =>{
    return(
        <div>
            <div className="main--benefits">
                <div className="img-container">
                    <img className="benefits--img" src={benefitsImg} alt="benefits-img"/>
                </div>
                <div className="benefits--details">
                    <div className="benefits--header">
                        <h5>Learn Anything</h5>
                        <h2>Benefits About Online Learning Expertise</h2>
                    </div>
                    <div className="benefits--info">
                        <div className="box-one">
                            {/* Icon 1*/}
                            <div className="benefits--icon"><GiBookmarklet className="book--icon"/></div>
                            <div className="details--desc">
                                <h3>Online Courses</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="box-two">
                            {/* Icon 2*/}
                            <div className="benefits--icon"><PiCertificateLight className="cert--icon"/></div>
                            <div className="details--desc">
                                <h3>Earn A Certificates</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className="box-three">
                            {/* Icon 3*/}
                            <div className="benefits--icon"><GrUserExpert className="cert--icon"/></div>
                            <div className="details--desc">
                                <h3>Learn with Expert</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default BenefitsPage