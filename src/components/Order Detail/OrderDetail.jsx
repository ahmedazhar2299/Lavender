import React from 'react'
import Cartitem from '../Cart Item/Cartitem'

export default function OrderDetail() {
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
    <Cartitem purchased={true} />
    <Cartitem purchased={true} />
    <Cartitem purchased={true} />
    <Cartitem purchased={true} />
    <Cartitem purchased={true} />
  </div>
  </>
  )
}
