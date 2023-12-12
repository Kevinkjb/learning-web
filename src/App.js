import NavBar from './components/NavBar';
import './App.css';
import HeroPage from './components/HeroPage';
import BenefitsPage from './components/BenefitsPage';

function App() {
  return (
    <div className="App">
      <div className='section--one'>
        <NavBar/>
        <HeroPage/>
      </div>
      <BenefitsPage/>
    </div>
  );
}

export default App;
