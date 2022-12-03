import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Address from '../Address/Address'
import Cartitem from '../Cart Item/Cartitem'

export default function OrderDetail({orderId}) {
  const [orders, setOrders] = useState({});
  useEffect(()=>{
    const fetchProducts = async()=>{
      const items = await axios.get(`/order/${orderId}`)
      setOrders(items.data?items.data :{})
    }
    fetchProducts()
  },[orders])
  return (
    <>
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
    {orders.products ? orders.products.map(prod=> {return <Cartitem productId ={prod.productId} quantity={prod.quantity} total={prod.total} color={prod.color} size={prod.size} purchased={true} />}) : ""}
    {orders.address ? <Address username={orders.address.name} email={orders.address.email} completeAddress={orders.address.completeAddress} city={orders.address.city} province={orders.address.province} zip={orders.address.zip} phone={orders.address.phone}/> :""}
  </div>
  </>
  )
}
