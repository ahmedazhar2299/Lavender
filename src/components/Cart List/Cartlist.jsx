import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Address from '../Address/Address'
import Cartitem from '../Cart Item/Cartitem'

export default function Cartlist() {
  const [cartItems, setCartItems] = useState([])
  useEffect(()=>{
    const fetchCartItems =async ()=>{
      let items = await axios.get('/cart')
      setCartItems(items.data ? items.data : [])
    }
    fetchCartItems()
  },[])
  return (
    <div className="max-w-2xl lg:mr-2 w-full vsm:overflow-x-scroll lg:overflow-x-hidden  overflow-y-hidden ">
            <div
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5 flex gap-36 w-fit"
            >
              <span>ITEM</span>
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </div>
          {cartItems ?  cartItems.map((prod)=>{
            return  (<Cartitem key={prod.productId} productId = {prod.productId} quantity = {prod.quantity} total = {prod.total} color ={prod.color} size = {prod.size} />)
          }) : ""}
          </div>
  )
}
