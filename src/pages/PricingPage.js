import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import FooterPage from "../components/FooterPage"
import Newsletter from "../components/News"
import pricingData from "./pricing-data"
import Pricing from "../components/Pricing"
import Faq from "../components/Faq"

const PricingPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"Choose The Right Plan"} titleTwo={"Pricing"}/>
            </div>

            {/* PRICING PLAN PAGE SECTION */}

            <section className="pricing--page">
                <header className="course-title-home">
                    <h5>Our Pricing</h5>
                    <h1>Pricing & Packages</h1>
                </header>
                <main className="pricing--section">
                    {
                        pricingData.map(price => (
                            <Pricing
                                key={price.id}
                                pricing={price}
                            />
                        ))
                    }
                </main>

            </section>

            <section className="faq--page">
                    <Faq 
                    
                    />
                    
            </section>

            {/* NEWSLETTER PAGE SECTION */}

            <section className="newsletter--page">
                <Newsletter />
            </section>

            {/* FOOTER PAGE SECTION */}
            <section className="footer--container">
                <FooterPage/>
            </section>
        </>
    )
}

export default PricingPage