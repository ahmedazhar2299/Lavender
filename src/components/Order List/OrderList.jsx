import React from 'react'
import OrderItem from '../Order Item/OrderItem'

export default function OrderList() {
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
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
  )
}
