import React from 'react'
import { Breadcrumb, DriverInformation, DriverOrderHistory } from './sub-component'

const DriverDetail = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <DriverInformation />
        <div className='card'>
          <div className="card-body">
            <DriverOrderHistory />
          </div>
        </div>
     </div>
    </>
  )
}

export default DriverDetail