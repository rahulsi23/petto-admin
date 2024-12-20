import React from 'react'
import { AddProductForm, Breadcrumb } from './sub-component'

const AddProduct = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <AddProductForm />
        </div>
       </div>
     </div>
    </>
  )
}

export default AddProduct