import BlogPage from "../components/BlogPage"
import HeroPageTwo from "../components/HeroPageTwo"
import NavBar from "../components/NavBar"
import blog from './blog-data'

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
        </>
    )
}

export default JournalPage