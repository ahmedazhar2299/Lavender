
import './App.css';
import Home from './pages/Home/Home';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Itemdetail from './pages/Item Detail/Itemdetail';
import Checkout from './pages/Checkout/Checkout';
import Order from './pages/Order/Order';
import ViewOrder from './pages/View Order/ViewOrder';
import { useSelector } from 'react-redux';
import checkUserSession from './api/UserSession';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddItem from './pages/Add Item/AddItem';

 const checkSession=async(dispatch)=>{
  await checkUserSession(dispatch)
 }

 function App() {
  useEffect(()=>{
    checkSession(dispatch)
  },[])
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.fetchUser.user)
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}> </Route>
      <Route exact path="/category/men" element={<Men />}> </Route>
      <Route exact path="/category/women" element={<Women />}> </Route>
      <Route exact path="/order" element={<Order />}> </Route>
      <Route exact path="/register" element={user?<Navigate to="/" /> : <Register />}> </Route>
      <Route exact path="/cart" element={user?<Cart /> : <Navigate to="/register"/>}> </Route>
      <Route exact path="/item/preview" element={<Itemdetail />}> </Route>
      <Route exact path="/checkout" element={user?<Checkout />: <Navigate to="/register"/>}> </Route>
      <Route exact path="/order/:id" element={user?<ViewOrder />: <Navigate to="/register"/>}> </Route>
      <Route exact path="/additem/" element={user?<AddItem />: <Navigate to="/register"/>}> </Route>
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;