import './App.css';
import HomePage from './pages/HomePage';
import AllCoursesPage from './pages/AllCoursesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import PricingPage from './pages/PricingPage';
import JournalPage from './pages/JournalPage';
import ContactPage from './pages/ContactPage';
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='courses' element={<AllCoursesPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='team' element={<TeamPage/>}/>
          <Route path='pricing' element={<PricingPage/>}/>
          <Route path='journal' element={<JournalPage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
