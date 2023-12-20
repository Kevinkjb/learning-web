
import '../css/pricing.css'

const Pricing = ({pricing}) => {
    return(
        <>
            <section>
                <div className="pricing--container">
                    <h5 className="plan">{pricing.plan}</h5>
                    <div className="pricing--option">
                        <span >$</span>
                        <h1 className="price">{pricing.price}K</h1>
                    </div>
                    <p className="pricing--desc">{pricing.description}</p>
                    <button className="pricing--btn">Get Started</button>
                </div>
            </section>
        </>
    )
}

export default Pricing