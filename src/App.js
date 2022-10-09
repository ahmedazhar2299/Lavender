
import './App.css';
import Home from './pages/Home/Home';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}> </Route>
      <Route exact path="/category/men" element={<Men />}> </Route>
      <Route exact path="/category/women" element={<Women />}> </Route>
    </Routes>
  </BrowserRouter>,
   </>
  );
}

export default App;