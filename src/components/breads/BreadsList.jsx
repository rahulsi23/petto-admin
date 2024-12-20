import React from 'react'
import {  DogBreadTable , Breadcrumb, CatBreadTable } from './sub-component'

const BreadsList = () => {
  return (
   <>
     <div className='main-wrapper'>
        <Breadcrumb />
          <div className="main-flex">
            <div className="inner-flex">
            <div className='card'>
              <div className='card-header'>
                <h3>Dog Bread</h3>
              </div>
        <div className="card-body">
        <DogBreadTable />
        </div>
       </div>
            </div>
            <div className="inner-flex">
            <div className='card'>
              <div className='card-header'>
                <h3>Cat Bread</h3>
              </div>
        <div className="card-body">
       <CatBreadTable />
        </div>
       </div>
            </div>
          </div>
     </div>
   </>
  )
}

export default BreadsList