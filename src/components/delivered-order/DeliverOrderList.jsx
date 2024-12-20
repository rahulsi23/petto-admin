import React from 'react'
import { Breadcrumb, DeliverOrderTable } from './sub-component'

const DeliverOrderList = () => {
  return (
    <>
     <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <DeliverOrderTable />
        </div>
       </div>
     </div>
    </>
  )
}

export default DeliverOrderList