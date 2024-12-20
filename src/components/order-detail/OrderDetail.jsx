import React, { useState } from 'react'
import { Breadcrumb, OrderInformation, OrderItemList, OverallAmount } from './sub-component'

const OrderDetail = () => {
    
  const [currentOrderDetails,setCurrentOrderDetails] = useState({
    id: 10,
    dateTime: "2024-01-12 01:45 PM",
    user: "Ivy Robinson",
    price: 130,
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    driver: null,
  },)

  return (
   <>
    <div className='main-wrapper'>
        <Breadcrumb />
          <OrderInformation currentOrderDetails={currentOrderDetails} setCurrentOrderDetails={setCurrentOrderDetails} />
          <div className='card'>
            <div className="card-body">
            <OrderItemList />
            </div>
          </div>
          <OverallAmount />
     </div>
   </>
  )
}

export default OrderDetail