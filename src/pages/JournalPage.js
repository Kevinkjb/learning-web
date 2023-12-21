import BlogPage from "../components/BlogPage"
import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import blog from './blog-data'
import Newsletter from "../components/News"
import FooterPage from "../components/FooterPage"

const JournalPage = () =>{
    return(
        <>
            <div className='section--two'>
                <NavBar/>
                <HeroPageTwo title={"Blog Posts"} titleTwo={"Blog"}/>
            </div>
            <div className="blog-all-section">
                {blog.map(item => (
                    <BlogPage
                    key={item.id}
                    blog={item}
                    />
                ))}
            </div>
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

export default JournalPage