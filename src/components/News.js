import { FaPaperPlane } from "react-icons/fa";
import '../css/news.css'

const Newsletter = () =>{
    return(
        <>
            <section className="news--container">
                <div>
                    <h2 className="news--title">Newsletter - Stay tune and get the latest update</h2>
                    <p>
                        Far far away, behind the word mountains
                    </p>
                </div>
                <form>
                    <div className="form">
                        <input className="email" placeholder="Enter email address"/>
                        <div className="news--btn-box">
                            <button className="news--btn"><FaPaperPlane/></button>
                        </div>

                    </div>

                </form>
            </section>
        </>
    )
}

export default Newsletter