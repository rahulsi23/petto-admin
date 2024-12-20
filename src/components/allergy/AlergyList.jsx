import React from 'react'
import { AllergyTable, Breadcrumb } from './sub-component'

const AlergyList = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <AllergyTable />
        </div>
       </div>
     </div>
</>
  )
}

export default AlergyList