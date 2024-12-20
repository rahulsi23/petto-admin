import React from 'react'
import { Breadcrumb, ProductTable } from './sub-component'

const ProductList = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <ProductTable />
        </div>
       </div>
     </div>
    </>
  )
}

export default ProductList