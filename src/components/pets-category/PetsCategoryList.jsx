import React from 'react'
import { Breadcrumb, PetsCategoryTable } from './sub-component'

const PetsCategoryList = () => {
  return (
    <>
          <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
           <PetsCategoryTable />
        </div>
       </div>
     </div>
    </>
 )
}

export default PetsCategoryList