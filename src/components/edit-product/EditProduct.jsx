import React from 'react'
import { Breadcrumb, EditProductForm } from './sub-component'

const EditProduct = () => {
  return (
   <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <EditProductForm />
        </div>
       </div>
     </div>
   </>
  )
}

export default EditProduct