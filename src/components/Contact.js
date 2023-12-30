import map from '../images/map.png'
import { Link } from 'react-router-dom'

const Contact = () =>{
    return(
        <>
            <section className='contact--section'>
                <div>
                    <img className='map--img' src={map} alt="map"/>
                </div>
                <div className='contact--details'>
                    <h3 className='contact--title'>Contact us</h3>
                    <p className='contact--desc'>We're open for any suggestion or just to have a chat</p>
                    <div className='contact--info'>
                        <div className='info--section'>
                            <h5>Address:</h5>
                            <p>198 West 21th Street, </p>
                            <p>Suite 721 New York NY </p>
                            <p>10016</p>
                        </div>
                        <div className='info--section'>
                            <h5>Email:</h5>
                            <p>info@yoursite.com</p>
                        </div>
                        <div className='info--section'>
                            <h5>Phone:</h5>
                            <p>+ 1235 2355 98</p>
                        </div>
                    </div>
                    <form className='contact--form'>
                        <input
                            className='name--input'
                            placeholder='Name'
                            type='name'
                        />
                        <input
                            className='email--input'
                            placeholder='Email'
                            type='email'
                        />
                        <input
                            className='subject--input'
                            type='text'
                            placeholder='Subject'
                        />
                        <textarea 
                            className='textarea--input'
                            placeholder='Create a message here'
                        />
                        <button className='contact--btn'>Send Message</button>
                    </form>
                    <div className='social--links'>
                        <h3>Follow us here</h3>
                        <div className='contact--social'>
                            <Link className='contact--media'>Facebook</Link>
                            <Link className='contact--media'>Twitter</Link>
                            <Link className='contact--media'>Instagram</Link>
                            <Link className='contact--media'>Dribbble</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact