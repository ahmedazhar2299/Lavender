import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../Order Item/OrderItem'


const generateTotal=(products)=>{
  let sum = 0;
  products.forEach(prod=>{
    sum+=parseInt(prod.total)
  })
  return sum
}

export default function OrderList() {
  const user = useSelector(state=> state.fetchUser.user)
  const [orders, setOrders] = useState([])


useEffect(()=>{

  const fetchUserOrders = async()=>{
    const currentOrder = await axios.get('/order')
    if(currentOrder.data){
      setOrders([currentOrder.data])
    }
    else{
      setOrders([])
    }
    
  }
  const fetchAdminOrders = async()=>{
    const currentOrder = await axios.get('/order/all')
    if(currentOrder.data){
      let listOrders = []
      currentOrder.data.forEach(userOrders=>{
        listOrders.push(userOrders.orderData)
      })
      setOrders(listOrders)
    }
    else{
      setOrders([])
    }
  }
  user.isAdmin =="true"?fetchAdminOrders() : fetchUserOrders()
},[orders])

  return (
    <div className="max-w-4xl lg:mr-2 w-full vsm:overflow-x-scroll lg:overflow-x-hidden  overflow-y-hidden ">
            <div
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5 flex gap-40 w-fit"
            >
              <span>Order#</span>
              <span>Date</span>
              <span>Total</span>
              <span>Status</span>
              <span>Action</span>
            </div>
            {orders.map(orderList=>orderList.map(order=><OrderItem orderId={order.orderId} date ={order.date} total={generateTotal(order.products)}/>))}
            
          </div>

  )
}
