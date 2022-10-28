
import './App.css';
import Home from './pages/Home/Home';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Itemdetail from './pages/Item Detail/Itemdetail';
import Checkout from './pages/Checkout/Checkout';
import Order from './pages/Order/Order';
import ViewOrder from './pages/View Order/ViewOrder';



function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}> </Route>
      <Route exact path="/category/men" element={<Men />}> </Route>
      <Route exact path="/category/women" element={<Women />}> </Route>
      <Route exact path="/order" element={<Order />}> </Route>
      <Route exact path="/register" element={<Register />}> </Route>
      <Route exact path="/cart" element={<Cart />}> </Route>
      <Route exact path="/item/preview" element={<Itemdetail />}> </Route>
      <Route exact path="/checkout" element={<Checkout />}> </Route>
      <Route exact path="/order/:id" element={<ViewOrder />}> </Route>
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;