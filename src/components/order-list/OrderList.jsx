import React from 'react'
import { Breadcrumb, OrderTableList } from './sub-component'

const OrderList = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <OrderTableList />
        </div>
       </div>
     </div>
    </>
  )
}

export default OrderList