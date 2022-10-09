
import './App.css';
import Ariival from './components/Arrival/Ariival';
import Category from './components/Category/Category';
import Navbar from './components/Nav bar/Navbar';
import Services from './components/Services/Services';
import Slideshow from './components/slideShow/Slideshow';
import Topbar from './components/Top-bar/Topbar';
import Weaklydeal from './components/Weakly Deal/Weaklydeal';


function App() {
  return (
   <>
  <Topbar/>
  <Navbar/>
  <Slideshow/>
  <Category/>
  <Ariival/>
  <Weaklydeal/>
  <Services/>
   </>
  );
}

export default App;