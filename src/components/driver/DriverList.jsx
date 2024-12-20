import React from 'react'
import { Breadcrumb, DriverTable } from './sub-component'

const DriverList = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
       <div className='card'>
        <div className="card-body">
        <DriverTable />
        </div>
       </div>
     </div>
    </>
  )
}

export default DriverList