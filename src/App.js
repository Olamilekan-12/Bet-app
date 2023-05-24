import './App.css';
import BetSelection from './components/betSelection/BetSelection';
import FixedBottomNav from './components/fixedBottomNav/FixedBottomNav';
import Footer from './components/footer/Footer';
import IconSection from './components/iconSection/IconSection';
import Matches from './components/matches/Matches';
import Today from './components/today/Today';
import TopNav from './components/topNav/TopNav';

function App() {
  return (
    <div className='app'>
      <TopNav/>
      <IconSection/>
      <Matches/>
      <Today/>
      <BetSelection/>
      <Footer/>
    <FixedBottomNav/>
    </div>
  );
}

export default App;
