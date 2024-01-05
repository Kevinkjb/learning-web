import { useState } from 'react';
import '../css/faq.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useRef, useEffect } from 'react';

const Faq = () =>{

    const [word, setWord] = useState(false)
    const [wordTwo, setwordTwo] = useState(false)
    const [wordThree, setwordThree] = useState(false)

    
    const accordToggle = useRef(null);
    const toggleTwo = useRef(null);
    const toggleThree = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) =>{
            if (!accordToggle.current.contains(event.target)) {
                setWord(false);
              }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, [accordToggle]);

    useEffect(() => {
        const handleBoxTwo = (event) =>{
            if(!toggleTwo.current.contains(event.target)){
                setwordTwo(false)
            }
        }
        document.addEventListener("mousedown", handleBoxTwo);
    }, [toggleTwo]);

    useEffect(() => {
        const handleBoxThree = (event) =>{
            if(!toggleThree.current.contains(event.target)){
                setwordThree(false)
            }
        }
        document.addEventListener("mousedown", handleBoxThree);
    }, [toggleThree]);

    return(
        <>
            <div className="course-title-home">
                    <h5>Faqs</h5>
                    <h1>Frequesntly Ask Question</h1>
            </div>
            <main className='faq--section'>
                <div className={word ? 'faqActive' : 'faq-box-one'} onClick={() => setWord(!word)}  ref={accordToggle}>
                    <h3>How to Enroll This Online Courses?</h3>
                    {word ? 
                         <FaAngleUp/> :  <FaAngleDown/>
                    }
                    
                </div>
                {
                    word ? (<p className='accordion'>
                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                    It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 
                    </p>) : null
                }
                
                <div className={wordTwo ? 'faqActive' : 'faq-box-two'} onClick={() => setwordTwo(!wordTwo)} ref={toggleTwo}>
                    <h3>Where It is hidden by default, until the collapse?</h3>
                    {wordTwo ? 
                         <FaAngleUp/> :  <FaAngleDown/>
                    }
                    
                </div>
                {
                    wordTwo ? (<p className='accordion'>
                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                    It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 
                    </p>) : null
                }
                <div  className={wordThree ? 'faqActive' : 'faq-box-three'} onClick={() => setwordThree(!wordThree)} ref={toggleThree}>
                    <h3>How to Enroll This Online Courses?</h3> 
                    {wordThree ? 
                         <FaAngleUp/> :  <FaAngleDown/>
                    }
                </div>
                {
                    wordThree ? (<p className='accordion'>
                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                    It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 
                    </p>) : null
                }
            </main>
        </>
    )
}

export default Faq